# 🎨 Design Sync Instructions

Your website is now powered by the design from your AI Studio repo (`biblicalman1611/The-Alpha-Biblical-Man-App`).

## How to Update the Design

When you make changes in Google AI Studio / GitHub:

1.  **Open your terminal** in this project folder.
2.  **Run the sync script**:
    ```bash
    npm run sync-design
    ```
    *(This pulls the latest components from the AI repo, copies them over, and fixes the code automatically)*

3.  **Deploy the changes**:
    ```bash
    git add .
    git commit -m "Update design"
    git push
    ```

## What This Does
- Clones your AI design repo
- Updates all components in `components/new-site/`
- Updates `constants.ts` (blog posts, products)
- Preserves your backend logic (Login, Sam, Database)
