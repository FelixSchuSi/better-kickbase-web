export enum TEAM_NAMES {
  BOCHUM = 'Bochum',
  GLADBACH = 'M-Gladbach',
  FUERTH = 'Fürth',
  FREIBURG = 'Freiburg',
  HERTHA = 'Hertha',
  HOFFENHEIM = 'Hoffenheim',
  MAINZ = 'Mainz 05',
  BIELEFELD = 'Bielefeld',
  STUTTGART = 'Stuttgart',
  AUGSBURG = 'Augsburg',
  BAYERN = 'Bayern',
  UNION = 'Union',
  LEIPZIG = 'Leipzig',
  FRANKFURT = 'Frankfurt',
  WOLFSBURG = 'Wolfsburg',
  LEVERKUSEN = 'Bayer 04',
  KOELN = 'Köln',
  DORTMUND = 'Dortmund',
  BREMEN = 'Bremen',
  SCHALKE = 'Schalke',
  HEIDENHEIM = 'Heidenheim',
  DARMSTADT = 'Darmstadt',
  INACTIVE_PLAYERS = 'Inaktive Spieler'
}
// Bochum 24
// M-Gladbach 15
// Fürth 19
// Freiburg 5
// Hertha 20
// Hoffenheim 14
// Mainz 05 18
// Bielefeld 22
// Stuttgart 9
// Augsburg 13
// Bayern 2
// Union 40
// Leipzig 43
// Frankfurt 4
// Wolfsburg 11
// Bayer 04 7
// Köln 28
// Dortmund 3
// Inaktive Spieler undefined
export enum TEAM_IDS {
  BOCHUM = 24,
  GLADBACH = 15,
  FUERTH = 19,
  FREIBURG = 5,
  HERTHA = 20,
  HOFFENHEIM = 14,
  MAINZ = 18,
  BIELEFELD = 22,
  STUTTGART = 9,
  AUGSBURG = 13,
  BAYERN = 2,
  UNION = 40,
  LEIPZIG = 43,
  FRANKFURT = 4,
  WOLFSBURG = 11,
  LEVERKUSEN = 7,
  KOELN = 28,
  DORTMUND = 3,
  BREMEN = 10,
  SCHALKE = 8,
  HEIDENHEIM = 50,
  DARMSTADT = 42,
  INACTIVE_PLAYERS = -1
}

export function getTeamIdFromTeamName(team: TEAM_NAMES): TEAM_IDS {
  switch (team) {
    case TEAM_NAMES.AUGSBURG:
      return TEAM_IDS.AUGSBURG;
    case TEAM_NAMES.BAYERN:
      return TEAM_IDS.BAYERN;
    case TEAM_NAMES.BIELEFELD:
      return TEAM_IDS.BIELEFELD;
    case TEAM_NAMES.BOCHUM:
      return TEAM_IDS.BOCHUM;
    case TEAM_NAMES.DORTMUND:
      return TEAM_IDS.DORTMUND;
    case TEAM_NAMES.FRANKFURT:
      return TEAM_IDS.FRANKFURT;
    case TEAM_NAMES.FREIBURG:
      return TEAM_IDS.FREIBURG;
    case TEAM_NAMES.FUERTH:
      return TEAM_IDS.FUERTH;
    case TEAM_NAMES.GLADBACH:
      return TEAM_IDS.GLADBACH;
    case TEAM_NAMES.HERTHA:
      return TEAM_IDS.HERTHA;
    case TEAM_NAMES.HOFFENHEIM:
      return TEAM_IDS.HOFFENHEIM;
    case TEAM_NAMES.KOELN:
      return TEAM_IDS.KOELN;
    case TEAM_NAMES.LEIPZIG:
      return TEAM_IDS.LEIPZIG;
    case TEAM_NAMES.LEVERKUSEN:
      return TEAM_IDS.LEVERKUSEN;
    case TEAM_NAMES.MAINZ:
      return TEAM_IDS.MAINZ;
    case TEAM_NAMES.STUTTGART:
      return TEAM_IDS.STUTTGART;
    case TEAM_NAMES.UNION:
      return TEAM_IDS.UNION;
    case TEAM_NAMES.WOLFSBURG:
      return TEAM_IDS.WOLFSBURG;
    case TEAM_NAMES.SCHALKE:
      return TEAM_IDS.SCHALKE;
    case TEAM_NAMES.BREMEN:
      return TEAM_IDS.BREMEN;
    case TEAM_NAMES.HEIDENHEIM:
      return TEAM_IDS.HEIDENHEIM;
    case TEAM_NAMES.DARMSTADT:
      return TEAM_IDS.DARMSTADT;
    default:
    case TEAM_NAMES.INACTIVE_PLAYERS:
      return TEAM_IDS.INACTIVE_PLAYERS;
  }
}
