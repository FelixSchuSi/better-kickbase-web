import { css } from 'lit';
export const teamPrimaryColor: Record<number, string> = {
  15: '#28a144', // BMG
  11: '#51a600', // Wolfsb
  7: '#fe0000', // Leverk
  40: '#d3011c', // Union
  43: '#001f46', // Leipzig
  3: '#fde101', // BVB
  20: '#001f46', // Hertha -> Farbe muss noch überprüft werden
  24: '#0a5ca5', // Bochum
  13: '#ce1719', // Augsburg
  14: '#1c62b7', // Hoffenheim
  5: '#d11b1a', // Freiburg
  2: '#dc052e', // FCB
  22: '#0090d7', // Bielefeld
  19: '#019a32', // Führt
  28: '#e20612', // Köln -> Farbe muss noch überprüft werden
  9: '#e32219', // Stuttgart
  18: '#e30713', // Mainz
  4: '#e10010' // Frankfurt
};

export const teamColors = css`
  :root,
  * {
    --team-primary-color-15: #28a144;
    --team-primary-color-11: #51a600;
    --team-primary-color-7: #fe0000;
    --team-primary-color-40: #d3011c;
    --team-primary-color-43: #001f46;
    --team-primary-color-3: #fde101;
    --team-primary-color-20: #001f46;
    --team-primary-color-24: #0a5ca5;
    --team-primary-color-13: #ce1719;
    --team-primary-color-14: #1c62b7;
    --team-primary-color-5: #d11b1a;
    --team-primary-color-2: #dc052e;
    --team-primary-color-22: #0090d7;
    --team-primary-color-19: #019a32;
    --team-primary-color-28: #e20612;
    --team-primary-color-9: #e32219;
    --team-primary-color-18: #e30713;
    --team-primary-color-4: #e10010;
    --team-primary-color-50: #e10016;
    --team-primary-color-42: #014d9e;
  }
  .team-primary-color-4 {
    background-color: var(--team-primary-color-4);
  }
  .team-primary-color-15 {
    background-color: var(--team-primary-color-15);
  }
  .team-primary-color-11 {
    background-color: var(--team-primary-color-11);
  }
  .team-primary-color-7 {
    background-color: var(--team-primary-color-7);
  }
  .team-primary-color-40 {
    background-color: var(--team-primary-color-40);
  }
  .team-primary-color-43 {
    background-color: var(--team-primary-color-43);
  }
  .team-primary-color-3 {
    background-color: var(--team-primary-color-3);
  }
  .team-primary-color-20 {
    background-color: var(--team-primary-color-20);
  }
  .team-primary-color-24 {
    background-color: var(--team-primary-color-24);
  }
  .team-primary-color-13 {
    background-color: var(--team-primary-color-13);
  }
  .team-primary-color-14 {
    background-color: var(--team-primary-color-14);
  }
  .team-primary-color-5 {
    background-color: var(--team-primary-color-5);
  }
  .team-primary-color-2 {
    background-color: var(--team-primary-color-2);
  }
  .team-primary-color-22 {
    background-color: var(--team-primary-color-22);
  }
  .team-primary-color-19 {
    background-color: var(--team-primary-color-19);
  }
  .team-primary-color-28 {
    background-color: var(--team-primary-color-28);
  }
  .team-primary-color-9 {
    background-color: var(--team-primary-color-9);
  }
  .team-primary-color-18 {
    background-color: var(--team-primary-color-18);
  }
  .team-primary-color-50 {
    background-color: var(--team-primary-color-50);
  }
  .team-primary-color-42 {
    background-color: var(--team-primary-color-42);
  }
`;
