const ClassesModel = [
  { id: 0, label: 'Selecione', value: null, group: '' },
  {
    id: 1,
    label: 'Abençoado',
    value: 'Abençoado',
    group: 'Divino',
    initialLF: 16,
    lfEachLevel: 4,
    trainedExpertise: 2,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 0 },
      { level: 2, bonus: 1 },
      { level: 3, bonus: 2 },
      { level: 4, bonus: 3 },
      { level: 5, bonus: 3 },
      { level: 6, bonus: 4 },
      { level: 7, bonus: 5 },
      { level: 8, bonus: 6 },
      { level: 9, bonus: 6 },
      { level: 10, bonus: 7 },
      { level: 11, bonus: 8 },
      { level: 12, bonus: 9 },
      { level: 13, bonus: 9 },
      { level: 14, bonus: 10 },
      { level: 15, bonus: 11 },
      { level: 16, bonus: 12 },
      { level: 17, bonus: 12 },
      { level: 18, bonus: 13 },
      { level: 19, bonus: 14 },
      { level: 20, bonus: 15 },
    ],
  },
  {
    id: 2,
    label: 'Artífice',
    value: 'Artífice',
    group: 'Especialista',
    initialLF: 12,
    lfEachLevel: 3,
    trainedExpertise: 6,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 0 },
      { level: 2, bonus: 1 },
      { level: 3, bonus: 2 },
      { level: 4, bonus: 3 },
      { level: 5, bonus: 3 },
      { level: 6, bonus: 4 },
      { level: 7, bonus: 5 },
      { level: 8, bonus: 6 },
      { level: 9, bonus: 6 },
      { level: 10, bonus: 7 },
      { level: 11, bonus: 8 },
      { level: 12, bonus: 9 },
      { level: 13, bonus: 9 },
      { level: 14, bonus: 10 },
      { level: 15, bonus: 11 },
      { level: 16, bonus: 12 },
      { level: 17, bonus: 12 },
      { level: 18, bonus: 13 },
      { level: 19, bonus: 14 },
      { level: 20, bonus: 15 },
    ],
  },
  {
    id: 3,
    label: 'Bárbaro',
    value: 'Bárbaro',
    group: 'Combatente',
    initialLF: 24,
    lfEachLevel: 6,
    trainedExpertise: 4,
    levelBonus: {
      damageReduction: [
        { level: 7, bonus: 1 },
        { level: 10, bonus: 1 },
        { level: 13, bonus: 1 },
        { level: 16, bonus: 1 },
        { level: 19, bonus: 1 },
      ],
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 1 },
      { level: 2, bonus: 2 },
      { level: 3, bonus: 3 },
      { level: 4, bonus: 4 },
      { level: 5, bonus: 5 },
      { level: 6, bonus: 6 },
      { level: 7, bonus: 7 },
      { level: 8, bonus: 8 },
      { level: 9, bonus: 9 },
      { level: 10, bonus: 10 },
      { level: 11, bonus: 11 },
      { level: 12, bonus: 12 },
      { level: 13, bonus: 13 },
      { level: 14, bonus: 14 },
      { level: 15, bonus: 15 },
      { level: 16, bonus: 16 },
      { level: 17, bonus: 17 },
      { level: 18, bonus: 18 },
      { level: 19, bonus: 19 },
      { level: 20, bonus: 20 },
    ],
  },
  {
    id: 4,
    label: 'Bardo',
    value: 'Bardo',
    group: 'Especialista',
    initialLF: 12,
    lfEachLevel: 3,
    trainedExpertise: 6,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 0 },
      { level: 2, bonus: 1 },
      { level: 3, bonus: 2 },
      { level: 4, bonus: 3 },
      { level: 5, bonus: 3 },
      { level: 6, bonus: 4 },
      { level: 7, bonus: 5 },
      { level: 8, bonus: 6 },
      { level: 9, bonus: 6 },
      { level: 10, bonus: 7 },
      { level: 11, bonus: 8 },
      { level: 12, bonus: 9 },
      { level: 13, bonus: 9 },
      { level: 14, bonus: 10 },
      { level: 15, bonus: 11 },
      { level: 16, bonus: 12 },
      { level: 17, bonus: 12 },
      { level: 18, bonus: 13 },
      { level: 19, bonus: 14 },
      { level: 20, bonus: 15 },
    ],
  },
  {
    id: 5,
    label: 'Cavaleiro',
    value: 'Cavaleiro',
    group: 'Combatente',
    initialLF: 20,
    lfEachLevel: 5,
    trainedExpertise: 2,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 1 },
      { level: 2, bonus: 2 },
      { level: 3, bonus: 3 },
      { level: 4, bonus: 4 },
      { level: 5, bonus: 5 },
      { level: 6, bonus: 6 },
      { level: 7, bonus: 7 },
      { level: 8, bonus: 8 },
      { level: 9, bonus: 9 },
      { level: 10, bonus: 10 },
      { level: 11, bonus: 11 },
      { level: 12, bonus: 12 },
      { level: 13, bonus: 13 },
      { level: 14, bonus: 14 },
      { level: 15, bonus: 15 },
      { level: 16, bonus: 16 },
      { level: 17, bonus: 17 },
      { level: 18, bonus: 18 },
      { level: 19, bonus: 19 },
      { level: 20, bonus: 20 },
    ],
  },
  {
    id: 6,
    label: 'Clérigo',
    value: 'Clérigo',
    group: 'Divino',
    initialLF: 16,
    lfEachLevel: 4,
    trainedExpertise: 2,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 0 },
      { level: 2, bonus: 1 },
      { level: 3, bonus: 2 },
      { level: 4, bonus: 3 },
      { level: 5, bonus: 3 },
      { level: 6, bonus: 4 },
      { level: 7, bonus: 5 },
      { level: 8, bonus: 6 },
      { level: 9, bonus: 6 },
      { level: 10, bonus: 7 },
      { level: 11, bonus: 8 },
      { level: 12, bonus: 9 },
      { level: 13, bonus: 9 },
      { level: 14, bonus: 10 },
      { level: 15, bonus: 11 },
      { level: 16, bonus: 12 },
      { level: 17, bonus: 12 },
      { level: 18, bonus: 13 },
      { level: 19, bonus: 14 },
      { level: 20, bonus: 15 },
    ],
  },
  {
    id: 7,
    label: 'Druida',
    value: 'Druida',
    group: 'Divino',
    initialLF: 16,
    lfEachLevel: 4,
    trainedExpertise: 4,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 0 },
      { level: 2, bonus: 1 },
      { level: 3, bonus: 2 },
      { level: 4, bonus: 3 },
      { level: 5, bonus: 3 },
      { level: 6, bonus: 4 },
      { level: 7, bonus: 5 },
      { level: 8, bonus: 6 },
      { level: 9, bonus: 6 },
      { level: 10, bonus: 7 },
      { level: 11, bonus: 8 },
      { level: 12, bonus: 9 },
      { level: 13, bonus: 9 },
      { level: 14, bonus: 10 },
      { level: 15, bonus: 11 },
      { level: 16, bonus: 12 },
      { level: 17, bonus: 12 },
      { level: 18, bonus: 13 },
      { level: 19, bonus: 14 },
      { level: 20, bonus: 15 },
    ],
  },
  {
    id: 8,
    label: 'Feiticeiro',
    value: 'Feiticeiro',
    group: 'Arcano',
    initialLF: 8,
    lfEachLevel: 2,
    trainedExpertise: 2,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 0 },
      { level: 2, bonus: 1 },
      { level: 3, bonus: 1 },
      { level: 4, bonus: 2 },
      { level: 5, bonus: 2 },
      { level: 6, bonus: 3 },
      { level: 7, bonus: 3 },
      { level: 8, bonus: 4 },
      { level: 9, bonus: 4 },
      { level: 10, bonus: 5 },
      { level: 11, bonus: 5 },
      { level: 12, bonus: 6 },
      { level: 13, bonus: 6 },
      { level: 14, bonus: 7 },
      { level: 15, bonus: 7 },
      { level: 16, bonus: 8 },
      { level: 17, bonus: 8 },
      { level: 18, bonus: 9 },
      { level: 19, bonus: 9 },
      { level: 20, bonus: 10 },
    ],
  },
  {
    id: 9,
    label: 'Guerreiro',
    value: 'Guerreiro',
    group: 'Combatente',
    initialLF: 20,
    lfEachLevel: 5,
    trainedExpertise: 2,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 1 },
      { level: 2, bonus: 2 },
      { level: 3, bonus: 3 },
      { level: 4, bonus: 4 },
      { level: 5, bonus: 5 },
      { level: 6, bonus: 6 },
      { level: 7, bonus: 7 },
      { level: 8, bonus: 8 },
      { level: 9, bonus: 9 },
      { level: 10, bonus: 10 },
      { level: 11, bonus: 11 },
      { level: 12, bonus: 12 },
      { level: 13, bonus: 13 },
      { level: 14, bonus: 14 },
      { level: 15, bonus: 15 },
      { level: 16, bonus: 16 },
      { level: 17, bonus: 17 },
      { level: 18, bonus: 18 },
      { level: 19, bonus: 19 },
      { level: 20, bonus: 20 },
    ],
  },
  {
    id: 10,
    label: 'Ladino',
    value: 'Ladino',
    group: 'Especialista',
    initialLF: 12,
    lfEachLevel: 3,
    trainedExpertise: 8,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 0 },
      { level: 2, bonus: 1 },
      { level: 3, bonus: 2 },
      { level: 4, bonus: 3 },
      { level: 5, bonus: 3 },
      { level: 6, bonus: 4 },
      { level: 7, bonus: 5 },
      { level: 8, bonus: 6 },
      { level: 9, bonus: 6 },
      { level: 10, bonus: 7 },
      { level: 11, bonus: 8 },
      { level: 12, bonus: 9 },
      { level: 13, bonus: 9 },
      { level: 14, bonus: 10 },
      { level: 15, bonus: 11 },
      { level: 16, bonus: 12 },
      { level: 17, bonus: 12 },
      { level: 18, bonus: 13 },
      { level: 19, bonus: 14 },
      { level: 20, bonus: 15 },
    ],
  },
  {
    id: 11,
    label: 'Lutador',
    value: 'Lutador',
    group: 'Combatente',
    initialLF: 20,
    lfEachLevel: 5,
    trainedExpertise: 4,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 1 },
      { level: 2, bonus: 2 },
      { level: 3, bonus: 3 },
      { level: 4, bonus: 4 },
      { level: 5, bonus: 5 },
      { level: 6, bonus: 6 },
      { level: 7, bonus: 7 },
      { level: 8, bonus: 8 },
      { level: 9, bonus: 9 },
      { level: 10, bonus: 10 },
      { level: 11, bonus: 11 },
      { level: 12, bonus: 12 },
      { level: 13, bonus: 13 },
      { level: 14, bonus: 14 },
      { level: 15, bonus: 15 },
      { level: 16, bonus: 16 },
      { level: 17, bonus: 17 },
      { level: 18, bonus: 18 },
      { level: 19, bonus: 19 },
      { level: 20, bonus: 20 },
    ],
  },
  {
    id: 12,
    label: 'Mago',
    value: 'Mago',
    group: 'Arcano',
    initialLF: 8,
    lfEachLevel: 2,
    trainedExpertise: 2,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 0 },
      { level: 2, bonus: 1 },
      { level: 3, bonus: 1 },
      { level: 4, bonus: 2 },
      { level: 5, bonus: 2 },
      { level: 6, bonus: 3 },
      { level: 7, bonus: 3 },
      { level: 8, bonus: 4 },
      { level: 9, bonus: 4 },
      { level: 10, bonus: 5 },
      { level: 11, bonus: 5 },
      { level: 12, bonus: 6 },
      { level: 13, bonus: 6 },
      { level: 14, bonus: 7 },
      { level: 15, bonus: 7 },
      { level: 16, bonus: 8 },
      { level: 17, bonus: 8 },
      { level: 18, bonus: 9 },
      { level: 19, bonus: 9 },
      { level: 20, bonus: 10 },
    ],
  },
  {
    id: 13,
    label: 'Monge',
    value: 'Monge',
    group: 'Combatente',
    initialLF: 16,
    lfEachLevel: 4,
    trainedExpertise: 4,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 1 },
      { level: 2, bonus: 2 },
      { level: 3, bonus: 3 },
      { level: 4, bonus: 4 },
      { level: 5, bonus: 5 },
      { level: 6, bonus: 6 },
      { level: 7, bonus: 7 },
      { level: 8, bonus: 8 },
      { level: 9, bonus: 9 },
      { level: 10, bonus: 10 },
      { level: 11, bonus: 11 },
      { level: 12, bonus: 12 },
      { level: 13, bonus: 13 },
      { level: 14, bonus: 14 },
      { level: 15, bonus: 15 },
      { level: 16, bonus: 16 },
      { level: 17, bonus: 17 },
      { level: 18, bonus: 18 },
      { level: 19, bonus: 19 },
      { level: 20, bonus: 20 },
    ],
  },
  {
    id: 14,
    label: 'Ninja',
    value: 'Ninja',
    group: 'Especialista',
    initialLF: 12,
    lfEachLevel: 3,
    trainedExpertise: 6,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 0 },
      { level: 2, bonus: 1 },
      { level: 3, bonus: 2 },
      { level: 4, bonus: 3 },
      { level: 5, bonus: 3 },
      { level: 6, bonus: 4 },
      { level: 7, bonus: 5 },
      { level: 8, bonus: 6 },
      { level: 9, bonus: 6 },
      { level: 10, bonus: 7 },
      { level: 11, bonus: 8 },
      { level: 12, bonus: 9 },
      { level: 13, bonus: 9 },
      { level: 14, bonus: 10 },
      { level: 15, bonus: 11 },
      { level: 16, bonus: 12 },
      { level: 17, bonus: 12 },
      { level: 18, bonus: 13 },
      { level: 19, bonus: 14 },
      { level: 20, bonus: 15 },
    ],
  },
  {
    id: 15,
    label: 'Nobre',
    value: 'Nobre',
    group: 'Especialista',
    initialLF: 16,
    lfEachLevel: 4,
    trainedExpertise: 6,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 0 },
      { level: 2, bonus: 1 },
      { level: 3, bonus: 2 },
      { level: 4, bonus: 3 },
      { level: 5, bonus: 3 },
      { level: 6, bonus: 4 },
      { level: 7, bonus: 5 },
      { level: 8, bonus: 6 },
      { level: 9, bonus: 6 },
      { level: 10, bonus: 7 },
      { level: 11, bonus: 8 },
      { level: 12, bonus: 9 },
      { level: 13, bonus: 9 },
      { level: 14, bonus: 10 },
      { level: 15, bonus: 11 },
      { level: 16, bonus: 12 },
      { level: 17, bonus: 12 },
      { level: 18, bonus: 13 },
      { level: 19, bonus: 14 },
      { level: 20, bonus: 15 },
    ],
  },
  {
    id: 16,
    label: 'Paladino',
    value: 'Paladino',
    group: 'Divino',
    initialLF: 20,
    lfEachLevel: 5,
    trainedExpertise: 2,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 1 },
      { level: 2, bonus: 2 },
      { level: 3, bonus: 3 },
      { level: 4, bonus: 4 },
      { level: 5, bonus: 5 },
      { level: 6, bonus: 6 },
      { level: 7, bonus: 7 },
      { level: 8, bonus: 8 },
      { level: 9, bonus: 9 },
      { level: 10, bonus: 10 },
      { level: 11, bonus: 11 },
      { level: 12, bonus: 12 },
      { level: 13, bonus: 13 },
      { level: 14, bonus: 14 },
      { level: 15, bonus: 15 },
      { level: 16, bonus: 16 },
      { level: 17, bonus: 17 },
      { level: 18, bonus: 18 },
      { level: 19, bonus: 19 },
      { level: 20, bonus: 20 },
    ],
  },
  {
    id: 17,
    label: 'Ranger',
    value: 'Ranger',
    group: 'Especialista',
    initialLF: 16,
    lfEachLevel: 4,
    trainedExpertise: 6,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 1 },
      { level: 2, bonus: 2 },
      { level: 3, bonus: 3 },
      { level: 4, bonus: 4 },
      { level: 5, bonus: 5 },
      { level: 6, bonus: 6 },
      { level: 7, bonus: 7 },
      { level: 8, bonus: 8 },
      { level: 9, bonus: 9 },
      { level: 10, bonus: 10 },
      { level: 11, bonus: 11 },
      { level: 12, bonus: 12 },
      { level: 13, bonus: 13 },
      { level: 14, bonus: 14 },
      { level: 15, bonus: 15 },
      { level: 16, bonus: 16 },
      { level: 17, bonus: 17 },
      { level: 18, bonus: 18 },
      { level: 19, bonus: 19 },
      { level: 20, bonus: 20 },
    ],
  },
  {
    id: 18,
    label: 'Samaritano',
    value: 'Samaritano',
    group: 'Divino',
    initialLF: 16,
    lfEachLevel: 4,
    trainedExpertise: 4,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 0 },
      { level: 2, bonus: 1 },
      { level: 3, bonus: 1 },
      { level: 4, bonus: 2 },
      { level: 5, bonus: 2 },
      { level: 6, bonus: 3 },
      { level: 7, bonus: 3 },
      { level: 8, bonus: 4 },
      { level: 9, bonus: 4 },
      { level: 10, bonus: 5 },
      { level: 11, bonus: 5 },
      { level: 12, bonus: 6 },
      { level: 13, bonus: 6 },
      { level: 14, bonus: 7 },
      { level: 15, bonus: 7 },
      { level: 16, bonus: 8 },
      { level: 17, bonus: 8 },
      { level: 18, bonus: 9 },
      { level: 19, bonus: 9 },
      { level: 20, bonus: 10 },
    ],
  },
  {
    id: 19,
    label: 'Samurai',
    value: 'Samurai',
    group: 'Combatente',
    initialLF: 20,
    lfEachLevel: 5,
    trainedExpertise: 4,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 1 },
      { level: 2, bonus: 2 },
      { level: 3, bonus: 3 },
      { level: 4, bonus: 4 },
      { level: 5, bonus: 5 },
      { level: 6, bonus: 6 },
      { level: 7, bonus: 7 },
      { level: 8, bonus: 8 },
      { level: 9, bonus: 9 },
      { level: 10, bonus: 10 },
      { level: 11, bonus: 11 },
      { level: 12, bonus: 12 },
      { level: 13, bonus: 13 },
      { level: 14, bonus: 14 },
      { level: 15, bonus: 15 },
      { level: 16, bonus: 16 },
      { level: 17, bonus: 17 },
      { level: 18, bonus: 18 },
      { level: 19, bonus: 19 },
      { level: 20, bonus: 20 },
    ],
  },
  {
    id: 20,
    label: 'Swashbuckler',
    value: 'Swashbuckler',
    group: 'Especialista',

    initialLF: 16,
    lfEachLevel: 4,
    trainedExpertise: 4,
    levelBonus: {
      damageReduction: {
        level: 0,
        bonus: 0,
      },
    },
    bba: [
      { level: 0, bonus: 0 },
      { level: 1, bonus: 1 },
      { level: 2, bonus: 2 },
      { level: 3, bonus: 3 },
      { level: 4, bonus: 4 },
      { level: 5, bonus: 5 },
      { level: 6, bonus: 6 },
      { level: 7, bonus: 7 },
      { level: 8, bonus: 8 },
      { level: 9, bonus: 9 },
      { level: 10, bonus: 10 },
      { level: 11, bonus: 11 },
      { level: 12, bonus: 12 },
      { level: 13, bonus: 13 },
      { level: 14, bonus: 14 },
      { level: 15, bonus: 15 },
      { level: 16, bonus: 16 },
      { level: 17, bonus: 17 },
      { level: 18, bonus: 18 },
      { level: 19, bonus: 19 },
      { level: 20, bonus: 20 },
    ],
  },
];

export default ClassesModel;
