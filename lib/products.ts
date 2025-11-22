/**
 * Product Configuration for The Armory
 *
 * This file contains all product information for display on /armory
 * Modify titles, descriptions, and URLs here without touching layout code
 */

export type Product = {
  id: string;
  title: string;
  category: 'fathers' | 'warriors' | 'vault';
  description: string;
  identityTagline: string; // "You're not buying X, you're buying Y"
  price: string;
  gumroadUrl: string;
  featured?: boolean;
};

export const products: Product[] = [
  // ========== FOR FATHERS ==========
  {
    id: 'kkbou',
    title: 'YOUR SON IS BEING SOFTENED WHILE YOU SLEEP.',
    category: 'fathers',
    description: 'A tactical guide for fathers who refuse to let culture raise their kids. Biblical frameworks for raising warriors, not wimps.',
    identityTagline: "You're not buying a parenting book. You're buying the backbone to raise your son the way God intended.",
    price: '$27',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/kkbou',
    featured: true,
  },
  {
    id: 'rjquds',
    title: "The King's Parenting Manual",
    category: 'fathers',
    description: 'Practical frameworks for biblical parenting. How to disciple, discipline, and lead your children without compromise.',
    identityTagline: "You're not buying parenting tips. You're buying a blueprint for raising children who fear God, not culture.",
    price: '$17',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/rjquds',
  },
  {
    id: 'nptnwl',
    title: "THE QUEEN'S GUIDE: RAISING YOUR HUSBAND",
    category: 'fathers',
    description: 'For wives who want to understand biblical submission and how to respect their husband\'s leadership.',
    identityTagline: "You're not buying marriage advice. You're buying clarity on what God actually commands about wifely submission.",
    price: '$17',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/nptnwl',
  },
  {
    id: 'orjlwl',
    title: 'The Family Throne Manual',
    category: 'fathers',
    description: 'How to establish biblical order in your home. Family worship, leadership structures, and discipleship frameworks.',
    identityTagline: "You're not buying a family devotional. You're buying the authority to lead your household like a king.",
    price: '$27',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/orjlwl',
  },
  {
    id: 'jfmwa',
    title: 'THE 12 CONVERSATIONS: How to Stop Performing and Start Being Known Before Your Kids Bury a Stranger',
    category: 'fathers',
    description: 'The hard conversations every father needs to have with his kids before it\'s too late.',
    identityTagline: "You're not buying conversation starters. You're buying the courage to be known by your children before they grow up resenting a stranger.",
    price: '$9.99',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/jfmwa',
  },

  // ========== FOR WARRIORS ==========
  {
    id: 'jxmbiy',
    title: 'The Warrior Bundle',
    category: 'warriors',
    description: 'Everything a man needs to fight the battles he's actually facing: marriage, mission, spiritual warfare, and becoming who God called him to be.',
    identityTagline: "You're not buying a course bundle. You're buying the complete arsenal for the war you're already in.",
    price: '$75',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/jxmbiy',
    featured: true,
  },
  {
    id: 'jhgmo',
    title: 'How to Find a Godly Woman (If You\'re Actually Serious)',
    category: 'warriors',
    description: 'No-nonsense guidance for single men looking for a biblical wife. What to look for, where to look, and how not to compromise.',
    identityTagline: "You're not buying dating advice. You're buying standards that will save you from marrying the wrong woman.",
    price: '$27',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/jhgmo',
  },
  {
    id: 'jhazfny',
    title: 'How to Find a Godly Man (Among the Neverland Lost Boys)',
    category: 'warriors',
    description: 'For women tired of dating boys pretending to be men. What biblical masculinity actually looks like and where to find it.',
    identityTagline: "You're not buying relationship advice. You're buying discernment to spot a real man among the counterfeits.",
    price: '$27',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/jhazfny',
  },
  {
    id: 'jikfak',
    title: "The King's Marriage Manual (RED VERSION)",
    category: 'warriors',
    description: 'Biblical marriage from a man\'s perspective. How to lead your wife, cultivate intimacy, and build a kingdom marriage.',
    identityTagline: "You're not buying marriage counseling. You're buying permission to lead your marriage the way God designed.",
    price: '$47',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/jikfak',
  },
  {
    id: 'jbqm',
    title: 'The Loneliness Lie',
    category: 'warriors',
    description: 'Why modern men feel isolated and what Scripture actually says about it. Break free from emotional self-pity and find biblical community.',
    identityTagline: "You're not buying self-help. You're buying clarity on why you feel alone and how to fight back.",
    price: '$7',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/jbqm',
  },
  {
    id: 'jzewnve',
    title: 'Decision-Making System for Christian Men (Template Pack)',
    category: 'warriors',
    description: 'Practical tools for making hard decisions with biblical clarity. Stop second-guessing yourself.',
    identityTagline: "You're not buying templates. You're buying a framework to make decisions with confidence and conviction.",
    price: '$37',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/jzewnve',
  },
  {
    id: 'jqstrfy',
    title: 'What Are You Really Hungry For? The 7 Counterfeit Hungers Destroying Christian Men (And The One Hunger That Saves)',
    category: 'warriors',
    description: 'Why you chase the wrong things and how to redirect your desires toward what actually satisfies.',
    identityTagline: "You're not buying motivation. You're buying the diagnosis for why nothing you chase ever fills the void.",
    price: '$27',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/jqstrfy',
  },
  {
    id: 'jyyewr',
    title: 'Break Free from Modern Demons in 7 Days—No More Excuses. No More Chains.',
    category: 'warriors',
    description: 'A 7-day battle plan for breaking free from porn, lust, anger, and spiritual numbness.',
    identityTagline: "You're not buying another devotional. You're buying a 7-day war plan to break chains you've been dragging for years.",
    price: '$4.99',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/jyyewr',
  },

  // ========== THE DOCTRINE VAULT ==========
  {
    id: 'eqwtyz',
    title: 'THE REAL JESUS THROUGH THE BIBLE — Audio Commentary',
    category: 'vault',
    description: 'Complete verse-by-verse audio commentary through the entire Bible. The Real Jesus, not the TikTok version.',
    identityTagline: "You're not buying Bible commentary. You're buying unfiltered truth about who Jesus actually is according to the KJV 1611.",
    price: '$14.99',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/eqwtyz',
    featured: true,
  },
  {
    id: 'huyrrp',
    title: 'Vault Platinum',
    category: 'vault',
    description: 'Every guide, every resource, every future release. One payment. Lifetime access to the complete arsenal.',
    identityTagline: "You're not buying products. You're buying a lifelong library of uncompromising biblical truth.",
    price: '$297',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/huyrrp',
    featured: true,
  },
  {
    id: 'jkbzl',
    title: 'The Vault Sampler — $7 Special',
    category: 'vault',
    description: 'Sample the vault before committing. Get a taste of the teaching style and content.',
    identityTagline: "You're not buying a sample. You're buying proof that this isn't another watered-down Christian grift.",
    price: '$7',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/jkbzl',
  },
  {
    id: 'jsemym',
    title: 'The Biblical Family Vault ($97)',
    category: 'vault',
    description: 'Complete family discipleship training. Everything you need to lead your family biblically.',
    identityTagline: "You're not buying family resources. You're buying the full blueprint for biblical family leadership.",
    price: '$97',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/jsemym',
  },
  {
    id: 'ozxuoy',
    title: 'The Submission Fraud: Free Guide | The Biblical Man',
    category: 'vault',
    description: 'What modern churches won\'t tell you about biblical submission. Free guide exposing the lies.',
    identityTagline: "You're not buying theology. You're buying the courage to teach what the KJV actually says about submission.",
    price: 'Free',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/ozxuoy',
  },
  {
    id: 'kfthoot',
    title: '60 UNCOMFORTABLE TRUTHS FOR CHRISTIAN WOMEN',
    category: 'vault',
    description: 'What Christian women need to hear but rarely do. Biblical womanhood without the sugar-coating.',
    identityTagline: "You're not buying women's ministry fluff. You're buying the hard truths modern churches refuse to preach.",
    price: '$14',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/kfthoot',
  },
  {
    id: 'onttags',
    title: 'THE DARKEST PROVERBS',
    category: 'vault',
    description: 'Deep dive into the hard sayings of Proverbs that most preachers skip. Wisdom literature without compromise.',
    identityTagline: "You're not buying devotionals. You're buying the verses your pastor is too afraid to preach.",
    price: '$17',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/onttags',
  },
  {
    id: 'onbcc',
    title: 'The Uncomfortable Christ: A 7-Day Deprogramming for Christians Who Are Done with Safe Religion',
    category: 'vault',
    description: '7-day journey to meet the real Christ—the one who offends, demands, and won\'t be tamed by modern Christianity.',
    identityTagline: "You're not buying a devotional. You're buying 7 days of deprogramming from the safe, sanitized Jesus you've been sold.",
    price: 'Free',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/onbcc',
  },
  {
    id: 'jevij',
    title: 'Give Me Something to Believe In: A Guide for Christians Who Lost Faith in Church',
    category: 'vault',
    description: 'For those who walked away from church but not from God. How to rebuild faith without the institutional garbage.',
    identityTagline: "You're not buying apologetics. You're buying permission to believe the Bible even when the church doesn't.",
    price: 'Free',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/jevij',
  },
  {
    id: 'elmog',
    title: 'How to Study the Bible Like Your Life Depends on It',
    category: 'vault',
    description: 'Practical tools for serious Bible study. How to read, interpret, and apply Scripture without twisting it.',
    identityTagline: "You're not buying study tips. You're buying the discipline to know what the Bible actually says instead of what you wish it said.",
    price: 'Free',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/elmog',
  },
  {
    id: 'qgrk8',
    title: 'Esther: The Queen Who Chose Violence',
    category: 'vault',
    description: 'The book of Esther like you\'ve never heard it. Courage, violence, and divine providence.',
    identityTagline: "You're not buying a Bible study. You're buying the story your women's ministry will never teach.",
    price: '$57.99',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/qgrk8',
  },
  {
    id: 'hjxju',
    title: 'Dick Detox',
    category: 'vault',
    description: 'Brutal honesty about sexual sin, porn addiction, and what it takes to actually break free.',
    identityTagline: "You're not buying another accountability program. You're buying the truth no pastor will say out loud.",
    price: '$20',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/hjxju',
  },
  {
    id: 'jjikz',
    title: 'ROMANS: The Nuclear Truth They Don\'t Want You to Know',
    category: 'vault',
    description: 'Romans chapter by chapter. The gospel without the evangelical spin.',
    identityTagline: "You're not buying commentary. You're buying Romans the way Paul actually wrote it.",
    price: '$27.99',
    gumroadUrl: 'https://biblicalman.gumroad.com/l/jjikz',
  },
];

// Helper functions for filtering
export function getProductsByCategory(category: Product['category']) {
  return products.filter(p => p.category === category);
}

export function getFeaturedProducts() {
  return products.filter(p => p.featured);
}

export function getProductById(id: string) {
  return products.find(p => p.id === id);
}
