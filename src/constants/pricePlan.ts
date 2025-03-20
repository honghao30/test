export const PRICE_PLAN_CONTENT = [
  { content: 'Market insights', level: 1 },
  { content: 'Zoning map layers', level: 1 },
  { content: 'Instant 3 feasibility studies', level: 1 },
  { content: 'Profit, NOI and project cost', level: 1 },
  { content: 'Generate up to 10,000 Solutions', level: 2 },
  { content: 'Profit Analysis & Filters', level: 3 },
  { content: 'Save projects & compare likes', level: 3 },
  { content: 'Download Excel Report: BOE Analysis, Rent Prices', level: 3 },
  { content: 'Download CAD file(.dxf)', level: 3 },
]

export const CONSULT_PLAN_CONTENT = [
  { content: 'Market insights and analysis', level: 3 },
  { content: 'Zoning code analysis and explore diverse scenarios', level: 3 },
  { content: 'Generate up to 50,000 options', level: 3 },
  { content: 'Recommend top 3 options including the highest return', level: 3 },
]

export enum PRICING_PLAN_NAME {
  VISITOR = 'visitor',
  BASIC = 'basic',
  PREMIUM = 'premium',
}

export const PRICING_PLAN_CONTENTS = {
  basic: {
    key: 'basic',
    name: 'Basic',
    content: [
      { main: 'No Signup Required' },
      { main: 'Market Data' },
      { main: 'Site Search' },
      { main: 'Volume Study' },
    ],
  },
  advanced: {
    key: 'advanced',
    name: 'Advanced',
    content: [
      { main: 'Signup Required' },
      { main: 'Market Data' },
      { main: 'Site Search' },
      { main: 'Volume Study' },
      { main: 'Deep Search' },
    ],
  },
  premium: {
    key: 'premium',
    name: 'Premium',
    content: [
      { main: '7 Day Free Trial' },
      { main: 'Market Data' },
      { main: 'Site Search' },
      { main: 'Volume Study' },
      { main: 'Deep Search' },
      {
        main: 'In-Depth Zoning Analysis',
      },
    ],
  },
  entreprise: {
    key: 'entreprise',
    name: 'Entreprise',
    content: [
      {
        main: 'custom input system based on your company’s own financial modeling standards',
      },
      { main: 'discounted pricing on mass users ' },
    ],
  },
}
