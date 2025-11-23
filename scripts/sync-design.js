const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const AI_REPO_URL = 'https://github.com/biblicalman1611/The-Alpha-Biblical-Man-App.git';
const TEMP_DIR = 'temp-ai-repo';
const TARGET_DIR = 'components/new-site';

function run(command) {
    console.log(`> ${command}`);
    execSync(command, { stdio: 'inherit' });
}

async function sync() {
    try {
        // 1. Clean up temp dir
        if (fs.existsSync(TEMP_DIR)) {
            fs.rmSync(TEMP_DIR, { recursive: true, force: true });
        }

        // 2. Clone AI Repo
        console.log('📥 Cloning AI Design Repo...');
        run(`git clone ${AI_REPO_URL} ${TEMP_DIR}`);

        // 3. Ensure target dir exists
        if (!fs.existsSync(TARGET_DIR)) {
            fs.mkdirSync(TARGET_DIR, { recursive: true });
        }

        // 4. Copy Components
        console.log('📋 Copying components...');
        run(`cp -r ${TEMP_DIR}/components/* ${TARGET_DIR}/`);

        // 5. Copy Shared Files
        console.log('📋 Copying shared files...');
        run(`cp ${TEMP_DIR}/constants.ts ${TARGET_DIR}/`);
        run(`cp ${TEMP_DIR}/types.ts ${TARGET_DIR}/`);
        run(`cp ${TEMP_DIR}/services/rssService.ts ${TARGET_DIR}/rssService.ts`);
        run(`cp ${TEMP_DIR}/services/geminiService.ts ${TARGET_DIR}/geminiService.ts`);

        // 6. Fix Imports
        console.log('🔧 Fixing imports...');

        const files = fs.readdirSync(TARGET_DIR).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

        files.forEach(file => {
            const filePath = path.join(TARGET_DIR, file);
            let content = fs.readFileSync(filePath, 'utf8');

            // Replace ../types with ./types
            content = content.replace(/from ['"]\.\.\/types['"]/g, 'from "./types"');
            // Replace ../constants with ./constants
            content = content.replace(/from ['"]\.\.\/constants['"]/g, 'from "./constants"');
            // Replace ../services/geminiService with ./geminiService
            content = content.replace(/from ['"]\.\.\/services\/geminiService['"]/g, 'from "./geminiService"');
            // Replace ../services/rssService with ./rssService
            content = content.replace(/from ['"]\.\.\/services\/rssService['"]/g, 'from "./rssService"');

            fs.writeFileSync(filePath, content);
        });

        // 7. Clean up
        fs.rmSync(TEMP_DIR, { recursive: true, force: true });

        console.log('✅ Sync Complete! Run "git add . && git commit -m \'sync design\' && git push" to deploy.');

    } catch (error) {
        console.error('❌ Sync Failed:', error);
        process.exit(1);
    }
}

sync();
