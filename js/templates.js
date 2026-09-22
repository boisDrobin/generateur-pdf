(function () {
  "use strict";

  const cephaleesData = {
    masthead: "FORMATION DPC EN EPP",
    dpc: {
      number: "N° 6920",
      agencyLine: "Organisme enregistré par l'Agence nationale du DPC",
      offerLine: "Retrouvez toute l'offre du DPC sur",
      website: "www.mondpc.fr"
    },
    event: {
      date: "Jeudi 17 Septembre 2026",
      time: "20h00 - 23h00",
      venue: "LA BRASSERIE JULES",
      address: "18 BD D'ALSACE LORRAINE, 80000 AMIENS",
      actionReference: "69202525117",
      sessionReference: "26.011",
      compensation: "225 €",
      compensationNote: "*Dans la limite du forfait disponible"
    },
    speaker: {
      intro: "Intervention du Dr",
      name: "Anne-Laure LAJOYE",
      role: "Cheffe de Clinique, Neurologue au CHU d’Amiens"
    },
    course: {
      title: "Céphalées de l’adulte en consultation de médecine générale : démarche diagnostique et prise en charge",
      objective: "Identifier les urgences céphalalgiques, connaitre les principaux types de céphalées primaires et secondaires, élaboration d’un parcours de soin adapté.",
      welcome: "Accueil des participants et cocktail dinatoire à partir de 19h30"
    },
    program: {
      heading: "PROGRAMME",
      analysisHeading: "Analyse sémiologique d’une céphalée au cabinet de médecine générale",
      analysisItems: ["Interrogatoire", "Examen clinique", "Drapeaux rouges"],
      conductHeading: "Conduite à tenir",
      conductItems: ["Quand adresser aux urgences ?", "Quand prescrire des examens complémentaires ?", "Quels examens ?"],
      primaryHeading: "Céphalées primaires",
      primaryItems: ["Migraines", "Algies vasculaires de la face", "Névralgies trigéminales essentielles", "Céphalées de tension"],
      secondaryHeading: "Céphalées secondaires"
    },
    schedule: {
      heading: "DÉROULÉ DE LA FORMATION",
      selfAssessment: "Questionnaire d’autoévaluation et grille d’audit à compléter avant la réunion.",
      meeting: "Réunion présentielle du 17 Septembre 2026 de 20h00 à 23h00 à la Brasserie Jules d’Amiens.",
      eppIntro: "A l'issu de la formation présentielle, 2ème tour d'EPP à réaliser :",
      eppItems: ["Audit Clinique", "Questionnaire d’évaluation", "Votre avis sur la formation"]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et “liste des sessions”.",
      sessionLead: "Cliquez sur l’onglet “S’inscrire”",
      sessionContext: "de la session concernée",
      sessionAfterReference: ".",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      title: "Une question ?",
      message: "Un membre de notre équipe vous répond au",
      phone: "04 23 46 00 37"
    },
    footer: {
      brandName: "MEDICAL-S",
      resourcesLine: "Programme de la formation / CGV / Règlement Intérieur",
      availableLine: "disponible sur :",
      website: "www.medical-s.org"
    }
  };

  const dermatologieData = {
    masthead: "FORMATION DPC EN EPP",
    dpc: {
      number: "N° 6920",
      agencyLine: "Organisme enregistré par l'Agence nationale du DPC",
      offerLine: "Retrouvez toute l'offre du DPC sur",
      website: "www.mondpc.fr"
    },
    event: {
      date: "Jeudi 24 Septembre 2026",
      time: "20h00 - 23h00",
      venue: "HÔTEL OCÉANIA",
      address: "82 BOULEVARD FRANÇOIS MITTERRAND\n63000 CLERMONT-FERRAND",
      actionReference: "69202425084",
      sessionReference: "26.026",
      compensation: "225 €",
      compensationNote: "*Dans la limite du forfait disponible"
    },
    speaker: {
      intro: "Intervention du Dr",
      name: "Jacques ROUANET",
      role: "Dermatologue et vénérologue, MCU-PH, Service de Dermatologie et d'Oncologie Cutanée au CHU Estaing"
    },
    course: {
      title: "Démarche diagnostique en dermatologie : pathologies fréquemment rencontrées au cabinet médical",
      objective: "Éviter les erreurs de diagnostic, quand traiter ? Quand adresser aux spécialistes aux urgences ?",
      welcome: "Accueil des participants et cocktail dinatoire à partir de 19h30"
    },
    program: {
      heading: "PROGRAMME",
      analysisHeading: "Orientation diagnostique et prise en charge :",
      analysisItems: ["Lésion unique", "Éruption aiguë de l’adulte", "Plaie chronique"],
      conductHeading: "Les urgences en dermatologie :",
      conductItems: [
        "Pathologies à présentation dermatologique pouvant engager le pronostic vital ou fonctionnel du patient",
        "Repérer les situations nécessitant des explorations complémentaires et/ou une orientation rapide vers un spécialiste ou les urgences"
      ],
      primaryHeading: "Les dermatoses du quotidien :",
      primaryItems: [
        "Psoriasis, dermatite atopique, urticaire, dermatoses faciales (autres : maladie de Verneuil…)",
        "Diagnostic et traitement",
        "Quand adresser au spécialiste"
      ],
      secondaryHeading: ""
    },
    schedule: {
      heading: "DÉROULÉ DE LA FORMATION",
      selfAssessment: "Questionnaire d’autoévaluation et grille d’audit à compléter avant la réunion.",
      meeting: "Réunion présentielle du 24 Septembre 2026 de 20h00 à 23h00 à l’Hôtel Océania - Clermont-Ferrand.",
      eppIntro: "A l'issu de la formation présentielle, 2ème tour d'EPP à réaliser :",
      eppItems: ["Audit Clinique", "Questionnaire d’évaluation", "Votre avis sur la formation"]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et “liste des sessions”.",
      sessionLead: "Cliquez sur l’onglet “S’inscrire”",
      sessionContext: "de la session concernée",
      sessionAfterReference: "",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      title: "Une question ?",
      message: "Un membre de notre équipe vous répond au",
      phone: "04 23 46 00 37"
    },
    footer: {
      brandName: "MEDICAL-S",
      resourcesLine: "Programme de la formation / CGV / Règlement Intérieur",
      availableLine: "disponible sur :",
      website: "www.medical-s.org"
    }
  };

  const dermatologiePediatriqueData = {
    masthead: "FORMATION DPC EN EPP",
    dpc: {
      number: "N° 6920",
      agencyLine: "Organisme enregistré par l'Agence nationale du DPC",
      offerLine: "Retrouvez toute l'offre du DPC sur",
      website: "www.mondpc.fr"
    },
    event: {
      date: "Mardi 29 Septembre 2026",
      time: "20h00 - 23h00",
      venue: "HÔTEL MERCURE CENTRE",
      address: "29 PLACE ST THIÉBAULT 57000 METZ",
      actionReference: "69202425080",
      sessionReference: "26.057",
      compensation: "225 €",
      compensationNote: "*Dans la limite du forfait disponible"
    },
    speaker: {
      intro: "Intervention du Pr",
      name: "Anne-Claire BURSZTEJN",
      role: "Dermatologue et vénérologue, Chef du Département de Dermato-Allergologie du CHRU de Nancy"
    },
    course: {
      title: "Démarche diagnostique en dermatologie pédiatrique : pathologies fréquemment rencontrées au cabinet médical",
      objective: "Éviter les erreurs de diagnostic, quand traiter ? Quand adresser aux spécialistes aux urgences ?",
      welcome: "Accueil des participants et cocktail dinatoire à partir de 19h30"
    },
    program: {
      heading: "PROGRAMME",
      analysisHeading: "Dermatite atopique :",
      analysisItems: [
        "La dermatite atopique chez le nourrisson, l’enfant et l’adolescent",
        "Complications infectieuses",
        "Diagnostic différentiel : dermatite séborrhéique, acrodermatite entéropathique, autres diagnostics différentiels",
        "Traitements : local, émollients, dermocorticoïdes, inhibiteurs de la calcineurine, traitements systémiques, biothérapie"
      ],
      conductHeading: "Érythème fessier :",
      conductItems: [
        "Dermite du siège irritative",
        "Dermites du siège infectieuse",
        "Dermatose du siège inflammatoire",
        "Dermite du siège associée à une maladie inflammatoire"
      ],
      primaryHeading: "Hémangiome / Angiomes",
      primaryItems: [],
      secondaryHeading: "Éruptions courantes :",
      secondaryItems: ["Virales", "Pseudo-virales", "Bactériennes", "Fongiques"]
    },
    schedule: {
      heading: "DÉROULÉ DE LA FORMATION",
      selfAssessment: "Questionnaire d’autoévaluation à compléter avant la réunion.",
      meeting: "Réunion présentielle du 29 Septembre 2026 de 20h à 23h à METZ.",
      eppIntro: "EPP en e-learning à réaliser après la formation en présentielle :",
      eppItems: ["Études des vignettes clinique", "Questionnaire d’évaluation", "Votre avis sur la formation"]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et “liste des sessions”.",
      sessionLead: "Cliquez sur l’onglet “S’inscrire”",
      sessionContext: "de la session concernée",
      sessionAfterReference: "",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      title: "Une question ?",
      message: "Un membre de notre équipe vous répond au",
      phone: "04 23 46 00 37"
    },
    footer: {
      brandName: "MEDICAL-S",
      resourcesLine: "Programme de la formation / CGV / Règlement Intérieur",
      availableLine: "disponible sur :",
      website: "www.medical-s.org"
    }
  };

  const suiviPreventifEnfantData = {
    masthead: "FORMATION DPC EN EPP",
    dpc: {
      number: "N° 6920",
      agencyLine: "Organisme enregistré par l'Agence nationale du DPC",
      offerLine: "Retrouvez toute l'offre du DPC sur",
      website: "www.mondpc.fr"
    },
    event: {
      date: "Mercredi 30 Septembre 2026",
      time: "20h00 - 23h00",
      venue: "MERCURE CENTRE GARE",
      address: "11 RUE RAYMOND POINCARE\n54000 NANCY",
      actionReference: "69202525119",
      sessionReference: "26.010",
      compensation: "225 €",
      compensationNote: "*Dans la limite du forfait disponible"
    },
    speaker: {
      intro: "Intervention des Drs",
      name: "Ariane THEVENARD-BERGER & Marine PETTINI",
      role: "Pédiatres - Urgence Pédiatrique - Coordination interservices Nancy/Metz\nEncadrement et formation des internes - Consultation de suivi"
    },
    course: {
      title: "Suivi préventif de l'enfant lors des 1000 premiers jours",
      objective: "Assurer le suivi préventif de l’enfant au cours des 1000 premiers jours, repérer les signes d’alerte du développement, savoir quand orienter vers un spécialiste et accompagner les parents dans la prévention et la vaccination.",
      welcome: "Accueil des participants et cocktail dinatoire à partir de 19h30"
    },
    program: {
      heading: "PROGRAMME",
      analysisHeading: "Au cours des 8 premiers jours :",
      analysisItems: [
        "Relation parents-enfant, contexte social",
        "Examen clinique",
        "Luxation congénitale de hanche",
        "Recherche des réflexes archaïques",
        "Évaluation du tonus",
        "Dépistage sensoriel",
        "Alimentation"
      ],
      conductHeading: "Jusqu’à 2 ans :",
      conductItems: [
        "Développement psychomoteur : Quand s’alerter ?",
        "Capacités cognitives : Vision, audition, dépistages des troubles, quand orienter vers un spécialiste",
        "Identifier et orienter",
        "Vaccinations obligatoires – Vaccinations recommandées"
      ],
      primaryHeading: "",
      primaryItems: [],
      secondaryHeading: "",
      secondaryItems: []
    },
    schedule: {
      heading: "DÉROULÉ DE LA FORMATION",
      selfAssessment: "Questionnaire d’autoévaluation et grille d’audit à compléter avant la réunion.",
      meeting: "Réunion présentielle du 30 Septembre 2026 de 20h00 à 23h00 à l’Hôtel Mercure Centre Gare - NANCY.",
      eppIntro: "A l'issu de la formation présentielle, 2ème tour d'EPP à réaliser :",
      eppItems: ["Audit Clinique", "Questionnaire d’évaluation", "Votre avis sur la formation"]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et “liste des sessions”.",
      sessionLead: "Cliquez sur l’onglet “S’inscrire”",
      sessionContext: "de la session concernée",
      sessionAfterReference: "",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      title: "Une question ?",
      message: "Un membre de notre équipe vous répond au",
      phone: "04 23 46 00 37"
    },
    footer: {
      brandName: "MEDICAL-S",
      resourcesLine: "Programme de la formation / CGV / Règlement Intérieur",
      availableLine: "disponible sur :",
      website: "www.medical-s.org"
    }
  };

  const suiviPreventifEnfantVirtuelData = {
    masthead: "FORMATION DPC EN EPP",
    event: {
      date: "Mercredi 30 Septembre 2026",
      time: "20h00 - 23h00",
      venue: "CLASSE VIRTUELLE",
      address: "Lien de connexion transmis par e-mail avant la session",
      actionReference: "69202525122",
      sessionReference: "26.005",
      compensation: "225 €",
      compensationNote: "*Dans la limite du forfait disponible"
    },
    speaker: {
      intro: "",
      name: "Drs Faustine DULION & Alexis LOUVEL",
      role: "Pédiatres / Praticiens hospitaliers - Urgences Pédiatriques - CHU Rouen"
    },
    course: {
      title: "Suivi préventif de l'enfant lors des 1000 premiers jours",
      objective: "Assurer le suivi préventif de l’enfant au cours des 1000 premiers jours, repérer les signes d’alerte du développement, savoir quand orienter vers un spécialiste et accompagner les parents dans la prévention et la vaccination.",
      welcome: "Questions, échanges et interactions tout au long de la session"
    },
    program: {
      heading: "PROGRAMME",
      analysisHeading: "Au cours des 8 premiers jours :",
      analysisItems: [
        "Relation parents-enfant, contexte social",
        "Examen clinique",
        "Luxation congénitale de hanche",
        "Recherche des réflexes archaïques",
        "Evaluation du tonus",
        "Dépistage sensoriel",
        "Alimentation"
      ],
      conductHeading: "Jusqu’à 2 ans :",
      conductItems: [
        "Développement psychomoteur : Quand s’alerter ?",
        "Capacités cognitives : Vision, audition, dépistages des troubles, quand orienter vers un spécialiste",
        "Identifier et orienter",
        "Vaccinations obligatoires – Vaccinations recommandées"
      ],
      primaryHeading: "",
      primaryItems: [],
      secondaryHeading: "",
      secondaryItems: []
    },
    schedule: {
      heading: "DÉROULÉ DE LA FORMATION",
      selfAssessment: "Questionnaire d’autoévaluation et grille d’audit à compléter avant la visioconférence.",
      meeting: "Réunion en classe virtuelle (visioconférence) du Mercredi 30 Septembre 2026 de 20h à 23h.",
      eppIntro: "A l'issu de la formation en classe virtuelle, 2ème tour d'EPP à réaliser :",
      eppItems: ["Audit Clinique", "Questionnaire d’évaluation", "Votre avis sur la formation"]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et “liste des sessions”.",
      sessionLead: "Cliquez sur l’onglet “S’inscrire”",
      sessionContext: "de la session concernée",
      sessionAfterReference: "",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      title: "Une question ?",
      message: "Un membre de notre équipe vous répond au",
      phone: "04 23 46 00 37"
    },
    footer: {
      brandName: "MEDICAL-S",
      resourcesLine: "Programme de la formation / CGV / Règlement Intérieur",
      availableLine: "disponible sur :",
      website: "www.medical-s.org"
    }
  };

  const expositionEcransVirtuelleData = {
    masthead: "FORMATION DPC EN EPP",
    event: {
      date: "Mardi 17 Novembre 2026",
      time: "20h00 - 23h00",
      venue: "CLASSE VIRTUELLE",
      address: "Lien de connexion transmis par e-mail avant la session",
      actionReference: "69202626001",
      sessionReference: "26.002",
      compensation: "225 €",
      compensationNote: "*Dans la limite du forfait disponible"
    },
    speaker: {
      intro: "",
      name: "Dr Christophe GAULD",
      role: "Psychiatre et Pédopsychiatre / MCU-PH - Hôpital Femme Mère Enfant / CHU LYON"
    },
    course: {
      title: "Exposition des enfants et des adolescents aux écrans : place du médecin généraliste",
      objective: "Identifier les principaux impacts de l’exposition aux écrans chez l’enfant et l’adolescent, repérer les situations à risque et accompagner les familles dans la réduction des risques et des dommages.",
      welcome: "Questions, échanges et interactions tout au long de la session"
    },
    program: {
      heading: "PROGRAMME",
      analysisHeading: "Introduction : La place des écrans dans nos sociétés",
      analysisSecondaryHeading: "Impact sur le développement cognitif :",
      analysisItems: [
        "Fonctions cognitives, langage et santé mentale",
        "Relations familiales et sociales",
        "Troubles émotionnels, affectifs et bien-être",
        "Résultats académiques"
      ],
      conductHeading: "Impact sur le développement somatique :",
      conductItems: [
        "Effets sur la vision, l'audition et le sommeil",
        "Effets sur les paramètres physiques et physiologiques"
      ],
      primaryHeading: "Risques liés à l’hyperexposition",
      primaryText: "",
      primaryItems: [],
      secondaryHeading: "Risque d’addiction comportementale",
      secondaryExtraHeading: "Réduction des risques et des dommages au cabinet",
      secondaryItems: []
    },
    schedule: {
      heading: "DÉROULÉ DE LA FORMATION",
      selfAssessment: "Questionnaire d’autoévaluation et grille d’audit à compléter avant la visioconférence.",
      meeting: "Réunion en classe virtuelle (visioconférence) du Mardi 17 Novembre 2026 de 20h à 23h.",
      eppIntro: "A l'issu de la formation en classe virtuelle, 2ème tour d'EPP à réaliser :",
      eppItems: ["Audit Clinique", "Questionnaire d’évaluation", "Votre avis sur la formation"]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et “liste des sessions”.",
      sessionLead: "Cliquez sur l’onglet “S’inscrire”",
      sessionContext: "de la session concernée",
      sessionAfterReference: "",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      title: "Une question ?",
      message: "Un membre de notre équipe vous répond au",
      phone: "04 23 46 00 37"
    },
    footer: {
      brandName: "MEDICAL-S",
      resourcesLine: "Programme de la formation / CGV / Règlement Intérieur",
      availableLine: "disponible sur :",
      website: "www.medical-s.org"
    }
  };

  const desirGrossesseData = {
    masthead: "FORMATION DPC EN EPP",
    dpc: {
      number: "N° 6920",
      agencyLine: "Organisme enregistré par l'Agence nationale du DPC",
      offerLine: "Retrouvez toute l'offre du DPC sur",
      website: "www.mondpc.fr"
    },
    event: {
      date: "Jeudi 1er Octobre 2026",
      time: "20h00 - 23h00",
      venue: "HÔTEL NOVOTEL MONTPELLIER",
      address: "125 BIS AV. DE PALAVAS\n34070 MONTPELLIER",
      actionReference: "69202626002",
      sessionReference: "26.001",
      compensation: "225 €",
      compensationNote: "*Dans la limite du forfait disponible"
    },
    speaker: {
      intro: "Intervention du Dr",
      name: "Claire VINCENS",
      role: "Médecin de la reproduction et gynécologue médical - CHU de Montpellier"
    },
    course: {
      title: "Prise en charge du désir de grossesse en médecine générale",
      objective: "Identifier les principales causes pouvant altérer la fertilité, connaître les options thérapeutiques et savoir quand orienter vers un spécialiste de la reproduction dans le cadre d’un désir de grossesse.",
      welcome: "Accueil des participants et cocktail dinatoire à partir de 19h30"
    },
    program: {
      heading: "PROGRAMME",
      analysisHeading: "Physiopathologie et clinique de l’endométriose",
      analysisSecondaryHeading: "Traitements médicaux",
      analysisItems: [],
      conductHeading: "Traitements chirurgicaux :",
      conductItems: ["Traitements chirurgicaux des endométriomes", "Risque de récidives et fertilité ultérieure"],
      primaryHeading: "Endométriose et infertilité, Préservation de la fertilité :",
      primaryItems: [
        "Fertilité après traitement de lésions endométriosiques",
        "Inséminations intra-utérines et endométriose",
        "Endométriose et ménopause"
      ],
      secondaryHeading: "Adénomyose :",
      secondaryItems: ["Clinique", "Traitements", "Infertilité"]
    },
    schedule: {
      heading: "DÉROULÉ DE LA FORMATION",
      selfAssessment: "Questionnaire d’autoévaluation et grille d’audit à compléter avant la réunion.",
      meeting: "Réunion présentielle du 1er Octobre de 20h00 à 23h00 à Montpellier.",
      eppIntro: "A l'issu de la formation présentielle, 2ème tour d'EPP à réaliser :",
      eppItems: ["Audit Clinique", "Questionnaire d’évaluation", "Votre avis sur la formation"]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et “liste des sessions”.",
      sessionLead: "Cliquez sur l’onglet “S’inscrire”",
      sessionContext: "de la session concernée",
      sessionAfterReference: "",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      title: "Une question ?",
      message: "Un membre de notre équipe vous répond au",
      phone: "04 23 46 00 37"
    },
    footer: {
      brandName: "MEDICAL-S",
      resourcesLine: "Programme de la formation / CGV / Règlement Intérieur",
      availableLine: "disponible sur :",
      website: "www.medical-s.org"
    }
  };

  const vertigesData = {
    masthead: "FORMATION DPC EN EPP",
    dpc: {
      number: "N° 6920",
      agencyLine: "Organisme enregistré par l'Agence nationale du DPC",
      offerLine: "Retrouvez toute l'offre du DPC sur",
      website: "www.mondpc.fr"
    },
    event: {
      date: "Mardi 06 Octobre 2026",
      time: "20h00 - 23h00",
      venue: "Novotel Nice Arénas Aéroport",
      address: "455 PROM. DES ANGLAIS\n06200 NICE",
      actionReference: "69202425087",
      sessionReference: "26.020",
      compensation: "225 €",
      compensationNote: "*Dans la limite du forfait disponible"
    },
    speaker: {
      intro: "Intervention du Dr",
      name: "Laurent TARDIVET",
      role: "ORL libéral à Nice - Praticien attaché au CHU PASTEUR, Institut Universitaire de la Face et du Cou, Nice"
    },
    course: {
      title: "Les vertiges en médecine générale",
      objective: "Identifier les principales causes de vertiges, orienter le diagnostic en médecine générale, repérer les situations nécessitant des examens complémentaires et adapter la prise en charge pour prévenir notamment les risques de chute.",
      welcome: "Accueil des participants et cocktail dinatoire à partir de 19h30"
    },
    program: {
      heading: "PROGRAMME",
      analysisHeading: "",
      analysisItems: [
        "Examiner un vertigineux en dix points",
        "Les vertiges positionnels : cristaux ou pas cristaux ?",
        "Aspects pratiques : démonstration et réalisation des manœuvres par les participants",
        "Quand et quels examens complémentaires demander ?",
        "Troubles de l’équilibre des personnes âgées : comment éviter les chutes et leurs complications"
      ],
      conductHeading: "",
      conductItems: [],
      primaryHeading: "",
      primaryItems: [],
      secondaryHeading: "",
      secondaryItems: []
    },
    schedule: {
      heading: "DÉROULÉ DE LA FORMATION",
      selfAssessment: "Questionnaire d’autoévaluation et grille d’audit à compléter avant la réunion.",
      meeting: "Réunion présentielle du 06 Octobre 2026 de 20h00 à 23h00 au Novotel Nice Arénas Aéroport.",
      eppIntro: "A l'issu de la formation présentielle, 2ème tour d'EPP à réaliser :",
      eppItems: ["Audit Clinique", "Questionnaire d’évaluation", "Votre avis sur la formation"]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et “liste des sessions”.",
      sessionLead: "Cliquez sur l’onglet “S’inscrire”",
      sessionContext: "de la session concernée",
      sessionAfterReference: "",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      title: "Une question ?",
      message: "Un membre de notre équipe vous répond au",
      phone: "04 23 46 00 37"
    },
    footer: {
      brandName: "MEDICAL-S",
      resourcesLine: "Programme de la formation / CGV / Règlement Intérieur",
      availableLine: "disponible sur :",
      website: "www.medical-s.org"
    }
  };

  const tdahData = {
    masthead: "FORMATION DPC EN EPP",
    dpc: {
      number: "N° 6920",
      agencyLine: "Organisme enregistré par l'Agence nationale du DPC",
      offerLine: "Retrouvez toute l'offre du DPC sur",
      website: "www.mondpc.fr"
    },
    event: {
      date: "Mercredi 14 Octobre 2026",
      time: "20h00 - 23h00",
      venue: "HÔTEL & SPA LE SPLENDID",
      address: "2 CR DE VERDUN\n40100 DAX",
      actionReference: "69202425099",
      sessionReference: "26.021",
      compensation: "225 €",
      compensationNote: "*Dans la limite du forfait disponible"
    },
    speaker: {
      intro: "Intervention du Dr",
      name: "Gaëlle CELTON",
      role: "Pédiatre\nService pédiatrie – néonatologie | Dax/Tyrosse"
    },
    course: {
      title: "Le trouble déficit de l’attention avec ou sans hyperactivité (TDAH) chez l’adulte et l’enfant de plus de 7 ans",
      objective: "Repérage et prises en charge actuelles : rôle du médecin généraliste et/ou du pédiatre",
      welcome: "Accueil des participants et cocktail dinatoire à partir de 19h30"
    },
    program: {
      heading: "PROGRAMME",
      analysisHeading: "",
      analysisItems: [
        "Définitions du TDAH chez l’enfant et l’adulte",
        "Repérage clinique et diagnostics différentiels",
        "Quelles investigations lancer dans un premier temps quand on n’a pas de pédopsychiatres ou de psychiatres disponibles rapidement ?"
      ],
      conductHeading: "Les prises en charge du TDAH :",
      conductItems: [
        "Les centres d’excellence : iMIND, INOVAND, EXACT, CEAND et STRAS&ND",
        "Les PEC humaines et suivis non médicaux",
        "La thérapeutique",
        "Le Méthylphénidate : comment, quoi et quand ?"
      ],
      primaryHeading: "La prise en charge des parents :",
      primaryText: "Être parents d’enfant ou d’adolescent présentant un TDAH n’est pas chose facile, beaucoup de prises en charge groupales ou individuelles existent : quels sont leur rôle ?",
      primaryItems: [],
      secondaryHeading: "",
      secondaryItems: ["Discussion - Questions/Réponses"]
    },
    schedule: {
      heading: "DÉROULÉ DE LA FORMATION",
      selfAssessment: "Questionnaire d’autoévaluation et grille d’audit à compléter avant la réunion.",
      meeting: "Réunion présentielle du 14 Octobre 2026 de 20h00 à 23h00 à l’Hôtel & Spa Le Splendid.",
      eppIntro: "A l'issu de la formation présentielle, 2ème tour d'EPP à réaliser :",
      eppItems: ["Audit Clinique", "Questionnaire d’évaluation", "Votre avis sur la formation"]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et “liste des sessions”.",
      sessionLead: "Cliquez sur l’onglet “S’inscrire”",
      sessionContext: "de la session concernée",
      sessionAfterReference: "",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      title: "Une question ?",
      message: "Un membre de notre équipe vous répond au",
      phone: "04 23 46 00 37"
    },
    footer: {
      brandName: "MEDICAL-S",
      resourcesLine: "Programme de la formation / CGV / Règlement Intérieur",
      availableLine: "disponible sur :",
      website: "www.medical-s.org"
    }
  };

  const tdahVirtuelData = {
    masthead: "FORMATION DPC EN EPP",
    event: {
      date: "Jeudi 24 Septembre 2026",
      time: "20h00 - 23h00",
      venue: "CLASSE VIRTUELLE",
      address: "Lien de connexion transmis par e-mail avant la session",
      actionReference: "69202425103",
      sessionReference: "26.014",
      compensation: "225 €",
      compensationNote: "*Dans la limite du forfait disponible"
    },
    speaker: {
      intro: "",
      name: "Dr Christophe GAULD",
      role: "Psychiatre et Pédopsychiatre / MCU-PH - Hôpital Femme Mère Enfant / CHU LYON"
    },
    course: {
      title: "Le TDAH (Trouble déficit de l’attention avec ou sans hyperactivité) chez l’adulte et chez l’enfant de plus de 7 ans",
      objective: "Repérage et prises en charges actuelles : Rôle du médecin généraliste et/ou du pédiatre",
      welcome: "Questions, échanges et interactions tout au long de la session"
    },
    program: {
      heading: "PROGRAMME",
      analysisHeading: "",
      analysisItems: [
        "Critères principaux de reconnaissance",
        "Repérage, signaux d’alerte, les outils de dépistages",
        "Diagnostics différentiels",
        "Quelles investigations lancées dans un premier temps ?",
        "Les PEC humaines et suivis non médicaux",
        "La thérapeutique",
        "La prise en charge des parents"
      ],
      conductHeading: "",
      conductItems: [],
      primaryHeading: "",
      primaryText: "",
      primaryItems: [],
      secondaryHeading: "",
      secondaryItems: []
    },
    schedule: {
      heading: "DÉROULÉ DE LA FORMATION",
      selfAssessment: "Questionnaire d’autoévaluation et grille d’audit à compléter avant la visioconférence.",
      meeting: "Réunion en classe virtuelle (visioconférence) du Jeudi 24 Septembre 2026 de 20h à 23h.",
      eppIntro: "A l'issu de la formation en classe virtuelle, 2ème tour d'EPP à réaliser :",
      eppItems: ["Audit Clinique", "Questionnaire d’évaluation", "Votre avis sur la formation"]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et “liste des sessions”.",
      sessionLead: "Cliquez sur l’onglet “S’inscrire”",
      sessionContext: "de la session concernée",
      sessionAfterReference: "",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      title: "Une question ?",
      message: "Un membre de notre équipe vous répond au",
      phone: "04 23 46 00 37"
    },
    footer: {
      brandName: "MEDICAL-S",
      resourcesLine: "Programme de la formation / CGV / Règlement Intérieur",
      availableLine: "disponible sur :",
      website: "www.medical-s.org"
    }
  };

  const dermatoscopieData = {
    masthead: "FORMATION DPC EN EPP",
    dpc: {
      number: "N° 6920",
      agencyLine: "Organisme enregistré par l'Agence nationale du DPC",
      offerLine: "Retrouvez toute l'offre du DPC sur",
      website: "www.mondpc.fr"
    },
    event: {
      date: "Jeudi 15 Octobre 2026",
      time: "20h00 - 23h00",
      venue: "CHÂTEAU LE CLOS DE LA RIBAUDIÈRE",
      address: "10 RUE DU CHAMP DE FOIRE\n86360 CHASSENEUIL-DU-POITOU",
      actionReference: "69202425098",
      sessionReference: "26.022",
      compensation: "225 €",
      compensationNote: "*Dans la limite du forfait disponible"
    },
    speaker: {
      intro: "Intervention du Dr",
      name: "Rodolphe RIVIERE",
      role: "Dermatologue et vénérologue - PH en dermatologie / Chef de clinique - assistant au CHU de Poitiers - DU de dermoscopie"
    },
    course: {
      title: "La dermatoscopie : reconnaître les principales lésions cutanées",
      objective: "Reconnaître les principales lésions cutanées en dermatoscopie, identifier les signes évocateurs de malignité et savoir orienter le diagnostic afin d’adapter la prise en charge.",
      welcome: "Accueil des participants et cocktail dinatoire à partir de 19h30"
    },
    program: {
      heading: "PROGRAMME",
      analysisHeading: "1. Introduction, généralités",
      analysisSecondaryHeading: "2. Dermatoscope :",
      analysisItems: ["Principe, matériel, fonctionnement, utilisation"],
      conductHeading: "3. Lésions mélanocytaires : Algorithmes en 2 étapes et patrons en dermoscopie",
      conductItems: [
        "Diagnostic en deux temps",
        "Patron des principales lésions en dermatologie",
        "Signes en faveur de la malignité"
      ],
      primaryHeading: "4. Principales autres lésions non mélanocytaires :",
      primaryText: "",
      primaryItems: ["Caractéristiques dermoscopiques : carcinome basocellulaires, épidermoïdes..."],
      secondaryHeading: "5. Quelques lésions bénignes à reconnaître",
      secondaryExtraHeading: "6. Applications :",
      secondaryItems: ["Une photo de dermoscopie, un diagnostic avec explication"]
    },
    schedule: {
      heading: "DÉROULÉ DE LA FORMATION",
      selfAssessment: "Questionnaire d’autoévaluation à compléter avant la réunion.",
      meeting: "Réunion présentielle du 15 Octobre 2026 de 20h00 à 23h00 au Château Le Clos de la Ribaudière.",
      eppIntro: "EPP en e-learning à réaliser après la formation en présentielle:",
      eppItems: ["Études des vignettes clinique", "Questionnaire d’évaluation", "Votre avis sur la formation"]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et “liste des sessions”.",
      sessionLead: "Cliquez sur l’onglet “S’inscrire”",
      sessionContext: "de la session concernée",
      sessionAfterReference: "",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      title: "Une question ?",
      message: "Un membre de notre équipe vous répond au",
      phone: "04 23 46 00 37"
    },
    footer: {
      brandName: "MEDICAL-S",
      resourcesLine: "Programme de la formation / CGV / Règlement Intérieur",
      availableLine: "disponible sur :",
      website: "www.medical-s.org"
    }
  };

  const dermatoscopieVirtuelleData = {
    masthead: "FORMATION DPC EN EPP",
    event: {
      date: "Jeudi 17 Septembre 2026",
      time: "20h00 - 23h00",
      venue: "CLASSE VIRTUELLE",
      address: "Lien de connexion transmis par e-mail avant la session",
      actionReference: "69202425102",
      sessionReference: "26.007",
      compensation: "225 €",
      compensationNote: "*Dans la limite du forfait disponible"
    },
    speaker: {
      intro: "Intervention du Dr",
      name: "Nathalie GIACCO",
      role: "Dermatologue et vénérologue spécialisée dans la cancérologie cutanée et le dépistage des mélanomes / Membre de l'International Dermoscopy Society"
    },
    course: {
      title: "La dermatoscopie : reconnaître les principales lésions cutanées",
      objective: "Reconnaître les principales lésions cutanées en dermatoscopie, identifier les signes évocateurs de malignité et savoir orienter le diagnostic afin d’adapter la prise en charge.",
      welcome: "Questions, échanges et interactions tout au long de la session"
    },
    program: {
      heading: "PROGRAMME",
      analysisHeading: "1. Introduction, généralités",
      analysisSecondaryHeading: "2. Dermatoscope :",
      analysisItems: ["Principe, matériel, fonctionnement, utilisation"],
      conductHeading: "3. Lésions mélanocytaires : Algorithmes en 2 étapes et patrons en dermoscopie",
      conductItems: [
        "Diagnostic en deux temps",
        "Patron des principales lésions en dermatologie",
        "Signes en faveur de la malignité"
      ],
      primaryHeading: "4. Principales autres lésions non mélanocytaires :",
      primaryText: "",
      primaryItems: ["Caractéristiques dermoscopiques : carcinome basocellulaires, épidermoïdes..."],
      secondaryHeading: "5. Quelques lésions bénignes à reconnaître",
      secondaryExtraHeading: "6. Applications :",
      secondaryItems: ["Une photo de dermoscopie, un diagnostic avec explication"]
    },
    schedule: {
      heading: "DÉROULÉ DE LA FORMATION",
      selfAssessment: "Questionnaire d’autoévaluation à compléter avant la visioconférence.",
      meeting: "Réunion en classe virtuelle (visioconférence) du 17 Septembre 2026 de 20h00 à 23h00.",
      eppIntro: "EPP en e-learning à réaliser après la formation en visioconférence :",
      eppItems: ["Études des vignettes clinique", "Questionnaire d’évaluation", "Votre avis sur la formation"]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et “liste des sessions”.",
      sessionLead: "Cliquez sur l’onglet “S’inscrire”",
      sessionContext: "de la session concernée",
      sessionAfterReference: "",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      title: "Une question ?",
      message: "Un membre de notre équipe vous répond au",
      phone: "04 23 46 00 37"
    },
    footer: {
      brandName: "MEDICAL-S",
      resourcesLine: "Programme de la formation / CGV / Règlement Intérieur",
      availableLine: "disponible sur :",
      website: "www.medical-s.org"
    }
  };

  const tsaData = {
    masthead: "FORMATION DPC EN EPP",
    dpc: {
      number: "N° 6920",
      agencyLine: "Organisme enregistré par l'Agence nationale du DPC",
      offerLine: "Retrouvez toute l'offre du DPC sur",
      website: "www.mondpc.fr"
    },
    event: {
      date: "Mercredi 4 Novembre 2026",
      time: "20h00 - 23h00",
      venue: "OCEANIA HÔTEL D'ANJOU ANGERS",
      address: "1 BD DU MARÉCHAL FOCH\n49100 ANGERS",
      actionReference: "69202425085",
      sessionReference: "26.008",
      compensation: "225 €",
      compensationNote: "*Dans la limite du forfait disponible"
    },
    speaker: {
      intro: "Intervention du Dr",
      name: "Auxane BESLOT",
      role: "Médecin Psychiatre - Assistante spécialiste CRA Pays de la Loire CHU d’Angers"
    },
    course: {
      title: "Les TSA (Troubles du Spectre de l'Autisme) chez l'adulte et l'enfant de plus de 7 ans",
      objective: "Repérage et prises en charges actuelles : rôle du médecin généraliste et/ou du pédiatre",
      welcome: "Accueil des participants et cocktail dinatoire à partir de 19h30"
    },
    program: {
      heading: "PROGRAMME",
      analysisHeading: "",
      analysisSecondaryHeading: "",
      analysisItems: [
        "Définitions des TSA",
        "Critères principaux de reconnaissance",
        "Critères diagnostics et masque social",
        "Modèles cognitifs et neurobiologiques",
        "Repérage des TSA, signaux d’alerte, outils de dépistage et repérage des symptômes cardinaux cliniques",
        "Diagnostics différentiels, troubles associés et leur traitement",
        "Prises en charges actuelles : recommandations nationales et internationales de la prise en charge des TSA",
        "En pratique, en tant que médecin généraliste ou pédiatre, que dois-je faire dans le cadre des TSA ?"
      ],
      conductHeading: "",
      conductItems: [],
      primaryHeading: "",
      primaryText: "",
      primaryItems: [],
      secondaryHeading: "",
      secondaryExtraHeading: "",
      secondaryItems: []
    },
    schedule: {
      heading: "DÉROULÉ DE LA FORMATION",
      selfAssessment: "Questionnaire d’autoévaluation et grille d’audit à compléter avant la réunion.",
      meeting: "Réunion présentielle du 4 Novembre 2026 de 20h00 à 23h00 à Angers.",
      eppIntro: "A l'issu de la formation présentielle, 2ème tour d'EPP à réaliser :",
      eppItems: ["Audit Clinique", "Questionnaire d’évaluation", "Votre avis sur la formation"]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et “liste des sessions”.",
      sessionLead: "Cliquez sur l’onglet “S’inscrire”",
      sessionContext: "de la session concernée",
      sessionAfterReference: "",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      title: "Une question ?",
      message: "Un membre de notre équipe vous répond au",
      phone: "04 23 46 00 37"
    },
    footer: {
      brandName: "MEDICAL-S",
      resourcesLine: "Programme de la formation / CGV / Règlement Intérieur",
      availableLine: "disponible sur :",
      website: "www.medical-s.org"
    }
  };

  const troubleRespiratoireEnfantData = {
    masthead: "FORMATION DPC EN EPP",
    dpc: {
      number: "N° 6920",
      agencyLine: "Organisme enregistré par l'Agence nationale du DPC",
      offerLine: "Retrouvez toute l'offre du DPC sur",
      website: "www.mondpc.fr"
    },
    event: {
      date: "Mardi 17 Novembre 2026",
      time: "20h00 - 23h00",
      venue: "HÔTEL OCÉANIA",
      address: "82 BOULEVARD FRANÇOIS MITTERRAND\n63000 CLERMONT-FERRAND",
      actionReference: "69202626005",
      sessionReference: "26.001",
      compensation: "225 €",
      compensationNote: "*Dans la limite du forfait disponible"
    },
    speaker: {
      intro: "Intervention du Dr",
      name: "Matthieu VERDAN",
      role: "Pédiatre, Chef de service Urgences Pédiatriques - UHCD - USC SMUR Néonatal et Pédiatrique au CHU de Clermont-Ferrand"
    },
    course: {
      title: "Démarche diagnostique devant un trouble respiratoire aigu chez l'enfant de 0 à 12 ans",
      objective: "Évaluer la gravité d’un trouble respiratoire aigu chez l’enfant, orienter la démarche diagnostique et adapter la prise en charge afin d’identifier les situations nécessitant une orientation urgente.",
      welcome: "Accueil des participants et cocktail dinatoire à partir de 19h30"
    },
    program: {
      heading: "PROGRAMME",
      analysisHeading: "Tri clinique et évaluation de la gravité :",
      analysisSecondaryHeading: "",
      analysisItems: [
        "Reconnaître l'urgence vitale d'emblée",
        "Quantifier la détresse respiratoire",
        "Mesures objectives",
        "Critères d'orientation immédiate"
      ],
      conductHeading: "Démarche étiologique structurée :",
      conductItems: [
        "Orientation selon l'âge et la clinique",
        "Examens complémentaires en ambulatoire",
        "Diagnostics différentiels à ne pas manquer",
        "L'Arbre Décisionnel Diagnostique"
      ],
      primaryHeading: "Thérapeutique et critères de retour à domicile :",
      primaryText: "",
      primaryItems: [
        "Prise en charge initiale",
        "Consignes de surveillance pour les parents",
        "Analyse de dossiers réels et application de l'arbre décisionnel"
      ],
      secondaryHeading: "",
      secondaryExtraHeading: "",
      secondaryItems: []
    },
    schedule: {
      heading: "DÉROULÉ DE LA FORMATION",
      selfAssessment: "Questionnaire d’autoévaluation et grille d’audit à compléter avant la réunion.",
      meeting: "Réunion présentielle du 17 Novembre 2026 de 20h00 à 23h00 à l’Hôtel Océania - Clermont-Ferrand.",
      eppIntro: "A l'issu de la formation présentielle, 2ème tour d'EPP à réaliser :",
      eppItems: ["Audit Clinique", "Questionnaire d’évaluation", "Votre avis sur la formation"]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et “liste des sessions”.",
      sessionLead: "Cliquez sur l’onglet “S’inscrire”",
      sessionContext: "de la session concernée",
      sessionAfterReference: "",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      title: "Une question ?",
      message: "Un membre de notre équipe vous répond au",
      phone: "04 23 46 00 37"
    },
    footer: {
      brandName: "MEDICAL-S",
      resourcesLine: "Programme de la formation / CGV / Règlement Intérieur",
      availableLine: "disponible sur :",
      website: "www.medical-s.org"
    }
  };

  const endometrioseData = {
    masthead: "FORMATION DPC EN EPP",
    dpc: {
      number: "N° 6920",
      agencyLine: "Organisme enregistré par l'Agence nationale du DPC",
      offerLine: "Retrouvez toute l'offre du DPC sur",
      website: "www.mondpc.fr"
    },
    event: {
      date: "Mardi 17 Novembre 2026",
      time: "20h00 - 23h00",
      venue: "HÔTEL NOVOTEL MONTPELLIER",
      address: "125 BIS AV. DE PALAVAS\n34070 MONTPELLIER",
      actionReference: "69202425106",
      sessionReference: "26.004",
      compensation: "225 €",
      compensationNote: "*Dans la limite du forfait disponible"
    },
    speaker: {
      intro: "Intervention du Dr",
      name: "Emmanuelle VINTEJOUX",
      role: "Gynécologue médical et obstétrique - CHU de Montpellier"
    },
    course: {
      title: "L’endométriose : diagnostic et prise en charge",
      objective: "Identifier les manifestations cliniques de l’endométriose, connaître les principales options thérapeutiques et savoir orienter la prise en charge, notamment en cas de problématique de fertilité.",
      welcome: "Accueil des participants et cocktail dinatoire à partir de 19h30"
    },
    program: {
      heading: "PROGRAMME",
      analysisHeading: "Physiopathologie et clinique de l’endométriose",
      analysisSecondaryHeading: "Traitements médicaux",
      analysisItems: [],
      conductHeading: "Traitements chirurgicaux :",
      conductItems: [
        "Traitements chirurgicaux des endométriomes",
        "Risque de récidives et fertilité ultérieure"
      ],
      primaryHeading: "Endométriose et infertilité, Préservation de la fertilité :",
      primaryText: "",
      primaryItems: [
        "Fertilité après traitement de lésions endométriosiques",
        "Inséminations intra-utérines et endométriose",
        "Endométriose et ménopause"
      ],
      secondaryHeading: "Adénomyose :",
      secondaryExtraHeading: "",
      secondaryItems: ["Clinique", "Traitements", "Infertilité"]
    },
    schedule: {
      heading: "DÉROULÉ DE LA FORMATION",
      selfAssessment: "Questionnaire d’autoévaluation et grille d’audit à compléter avant la réunion.",
      meeting: "Réunion présentielle du 17 Novembre de 20h00 à 23h00 à Montpellier.",
      eppIntro: "A l'issu de la formation présentielle, 2ème tour d'EPP à réaliser :",
      eppItems: ["Audit Clinique", "Questionnaire d’évaluation", "Votre avis sur la formation"]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et “liste des sessions”.",
      sessionLead: "Cliquez sur l’onglet “S’inscrire”",
      sessionContext: "de la session concernée",
      sessionAfterReference: "",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      title: "Une question ?",
      message: "Un membre de notre équipe vous répond au",
      phone: "04 23 46 00 37"
    },
    footer: {
      brandName: "MEDICAL-S",
      resourcesLine: "Programme de la formation / CGV / Règlement Intérieur",
      availableLine: "disponible sur :",
      website: "www.medical-s.org"
    }
  };

  const dermatologiePediatrique2Data = {
    masthead: "FORMATION DPC",
    dpc: {
      number: "N° 6920",
      agencyLine: "Organisme enregistré par l'Agence nationale du DPC",
      offerLine: "Retrouvez toute l'offre du DPC sur",
      website: "www.mondpc.fr"
    },
    event: {
      date: "Jeudi 26 Novembre 2026",
      time: "09h00 - 18h00",
      venue: "GOLF BASTIDE DE LA SALETTE",
      address: "65 IMPASSE DES VAUDRANS CS4029113924\nMARSEILLE CEDEX 11",
      actionReference: "69202525131",
      sessionReference: "26.001",
      compensation: "360 €",
      compensationNote: "*Dans la limite du forfait disponible"
    },
    speaker: {
      intro: "Intervention des Drs",
      name: "Astrid BELLISSEN et Olympe GAUDRAY",
      role: "Praticien Hospitalier, Dermatologue et vénérologue au CH d’Aubagne\nAvis et suivi spécialisé en dermatologie pédiatrique. Consultation d'urgence de pédiatrie Marseille"
    },
    course: {
      title: "Démarche diagnostique en dermatologie pédiatrique : pathologies fréquemment rencontrées au cabinet médical",
      objective: "Identifier les principales dermatoses pédiatriques, orienter le diagnostic, adapter la prise en charge et repérer les situations nécessitant un avis spécialisé.",
      welcome: "Accueil des participants et café d’accueil à partir de 8h30"
    },
    program: {
      heading: "PROGRAMME",
      analysisHeading: "",
      analysisSecondaryHeading: "",
      analysisItems: [
        "Dermatite Atopique - La dermatite atopique : chez le nourrisson, l’enfant et l’adolescent",
        "Complications infectieuses - Diagnostic différentiel : Dermatite séborrhéique / Acrodermatite entéropathique / autres diagnostics différentiel - Traitements : local / émollients / dermocorticoïdes / Inhibiteurs de la calcineurine / traitements systémiques / biothérapie",
        "Vignettes cliniques intéractives",
        "Érythème fessier - Dermite du siège irritative - Dermites du siège infectieuse - Dermatose du siège inflammatoire - Dermite du siège associée à une maladie inflammatoire",
        "Vignettes cliniques intéractives",
        "Hémangiome/Angiomes",
        "Vignettes cliniques intéractives",
        "Éruptions courantes : - Virales - Pseudo-virales - Bactériennes - Fongiques",
        "Vignettes cliniques intéractives",
        "Discussion - Questions/Réponses"
      ],
      conductHeading: "",
      conductItems: [],
      primaryHeading: "",
      primaryText: "",
      primaryItems: [],
      secondaryHeading: "",
      secondaryExtraHeading: "",
      secondaryItems: [],
      closingHeading: ""
    },
    schedule: {
      heading: "DÉROULÉ DE LA FORMATION",
      selfAssessment: "Café d’accueil à 8h30",
      meeting: "09h00 : début de la formation",
      eppIntro: "13h00 - 14h00 : pause déjeunatoire",
      eppItems: [],
      extraStep4: "14h00 : reprise",
      extraStep5: "18h00 : conclusion, questions et échanges",
      icons: [
        "assets/icons/coffee.svg",
        "assets/icons/presentation.svg",
        "assets/icons/restaurant.svg",
        "assets/icons/presentation.svg",
        "assets/icons/conclusion.svg"
      ]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et “liste des sessions”.",
      sessionLead: "Cliquez sur l’onglet “S’inscrire”",
      sessionContext: "de la session concernée",
      sessionAfterReference: "",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      title: "Une question ?",
      message: "Un membre de notre équipe vous répond au",
      phone: "04 23 46 00 37"
    },
    footer: {
      brandName: "MEDICAL-S",
      resourcesLine: "Programme de la formation / CGV / Règlement Intérieur",
      availableLine: "disponible sur :",
      website: "www.medical-s.org"
    }
  };

  const formSections = [
    {
      title: "Repères du document",
      fields: [
        { path: "masthead", label: "Type de formation" }
      ]
    },
    {
      title: "Informations pratiques",
      fields: [
        { path: "event.date", label: "Date" },
        { path: "event.time", label: "Horaires" },
        { path: "event.venue", label: "Lieu" },
        { path: "event.address", label: "Adresse" },
        { path: "event.actionReference", label: "Référence de l’action DPC" },
        { path: "event.sessionReference", label: "Référence de session" },
        { path: "event.compensation", label: "Indemnisation" },
        { path: "event.compensationNote", label: "Mention indemnisation" }
      ]
    },
    {
      title: "Intervenante",
      fields: [
        { path: "speaker.intro", label: "Introduction" },
        { path: "speaker.name", label: "Nom" },
        { path: "speaker.role", label: "Fonction" }
      ]
    },
    {
      title: "Formation",
      fields: [
        { path: "course.title", label: "Titre", type: "textarea", rows: 3 },
        { path: "course.objective", label: "Objectif", type: "textarea", rows: 4 },
        { path: "course.welcome", label: "Accueil", type: "textarea", rows: 2 }
      ]
    },
    {
      title: "Programme",
      fields: [
        { path: "program.analysisHeading", label: "Analyse", type: "textarea", rows: 2 },
        { path: "program.analysisItems", label: "Points d’analyse — une ligne par point", type: "list", rows: 4 },
        { path: "program.conductHeading", label: "Conduite — titre" },
        { path: "program.conductItems", label: "Conduite — une ligne par point", type: "list", rows: 3 },
        { path: "program.primaryHeading", label: "Céphalées primaires — titre" },
        { path: "program.primaryItems", label: "Céphalées primaires — une ligne par point", type: "list", rows: 5 },
        { path: "program.secondaryHeading", label: "Céphalées secondaires" }
      ]
    },
    {
      title: "Déroulé",
      fields: [
        { path: "schedule.selfAssessment", label: "Autoévaluation", type: "textarea", rows: 3 },
        { path: "schedule.meeting", label: "Réunion présentielle", type: "textarea", rows: 3 },
        { path: "schedule.eppIntro", label: "Deuxième tour EPP", type: "textarea", rows: 3 },
        { path: "schedule.eppItems", label: "Éléments EPP — une ligne par point", type: "list", rows: 4 }
      ]
    },
    {
      title: "Inscription",
      fields: [
        { path: "registration.heading", label: "Titre du bloc" },
        { path: "registration.accountLabel", label: "Libellé du compte" },
        { path: "registration.accountUrl", label: "Lien du compte" },
        { path: "registration.searchInstruction", label: "Instruction de recherche", type: "textarea", rows: 2 },
        { path: "registration.actionIntro", label: "Texte avant la référence de l’action", type: "textarea", rows: 2 },
        { path: "registration.actionAfterReference", label: "Texte après la référence de l’action", type: "textarea", rows: 2 },
        { path: "registration.detailsInstruction", label: "Instruction Rechercher / Détail / sessions", type: "textarea", rows: 3 },
        { path: "registration.sessionLead", label: "Début de l’instruction de session", type: "textarea", rows: 2 },
        { path: "registration.sessionContext", label: "Texte avant la référence de session", type: "textarea", rows: 2 },
        { path: "registration.validationInstruction", label: "Instruction finale", type: "textarea", rows: 2 }
      ]
    },
    {
      title: "Contacts",
      fields: [
        { path: "contacts.title", label: "Titre" },
        { path: "contacts.message", label: "Message", type: "textarea", rows: 2 },
        { path: "contacts.phone", label: "Téléphone" }
      ]
    },
    {
      title: "Pied de page",
      fields: [
        { path: "footer.resourcesLine", label: "Documents disponibles", type: "textarea", rows: 2 },
        { path: "footer.availableLine", label: "Mention de disponibilité" },
        { path: "footer.website", label: "Site Medical-S" }
      ]
    }
  ];

  const dermatologieFormSections = formSections.map(function (section) {
    return {
      title: section.title,
      fields: section.fields.map(function (field) { return Object.assign({}, field); })
    };
  });

  dermatologieFormSections.find(function (section) { return section.title === "Intervenante"; }).title = "Intervenant";
  dermatologieFormSections.find(function (section) { return section.title === "Programme"; }).fields = [
    { path: "program.analysisHeading", label: "Orientation diagnostique — titre", type: "textarea", rows: 2 },
    { path: "program.analysisItems", label: "Orientation diagnostique — une ligne par point", type: "list", rows: 4 },
    { path: "program.conductHeading", label: "Urgences en dermatologie — titre", type: "textarea", rows: 2 },
    { path: "program.conductItems", label: "Urgences en dermatologie — une ligne par point", type: "list", rows: 5 },
    { path: "program.primaryHeading", label: "Dermatoses du quotidien — titre", type: "textarea", rows: 2 },
    { path: "program.primaryItems", label: "Dermatoses du quotidien — une ligne par point", type: "list", rows: 7 }
  ];

  const dermatologiePediatriqueFormSections = formSections.map(function (section) {
    return {
      title: section.title,
      fields: section.fields.map(function (field) { return Object.assign({}, field); })
    };
  });

  dermatologiePediatriqueFormSections.find(function (section) { return section.title === "Intervenante"; }).title = "Intervenant";
  dermatologiePediatriqueFormSections.find(function (section) { return section.title === "Programme"; }).fields = [
    { path: "program.analysisHeading", label: "Dermatite atopique — titre", type: "textarea", rows: 2 },
    { path: "program.analysisItems", label: "Dermatite atopique — une ligne par point", type: "list", rows: 6 },
    { path: "program.conductHeading", label: "Érythème fessier — titre", type: "textarea", rows: 2 },
    { path: "program.conductItems", label: "Érythème fessier — une ligne par point", type: "list", rows: 5 },
    { path: "program.primaryHeading", label: "Hémangiome / Angiomes", type: "textarea", rows: 2 },
    { path: "program.secondaryHeading", label: "Éruptions courantes — titre", type: "textarea", rows: 2 },
    { path: "program.secondaryItems", label: "Éruptions courantes — une ligne par point", type: "list", rows: 5 }
  ];

  const suiviPreventifEnfantFormSections = formSections.map(function (section) {
    return {
      title: section.title,
      fields: section.fields.map(function (field) { return Object.assign({}, field); })
    };
  });

  suiviPreventifEnfantFormSections.find(function (section) { return section.title === "Intervenante"; }).title = "Intervenants";
  suiviPreventifEnfantFormSections.find(function (section) { return section.title === "Programme"; }).fields = [
    { path: "program.analysisHeading", label: "8 premiers jours — titre", type: "textarea", rows: 2 },
    { path: "program.analysisItems", label: "8 premiers jours — une ligne par point", type: "list", rows: 8 },
    { path: "program.conductHeading", label: "Jusqu’à 2 ans — titre", type: "textarea", rows: 2 },
    { path: "program.conductItems", label: "Jusqu’à 2 ans — une ligne par point", type: "list", rows: 6 }
  ];

  const suiviPreventifEnfantVirtuelFormSections = formSections.map(function (section) {
    return {
      title: section.title,
      fields: section.fields.map(function (field) { return Object.assign({}, field); })
    };
  });

  suiviPreventifEnfantVirtuelFormSections.find(function (section) { return section.title === "Intervenante"; }).title = "Intervenants";
  const suiviVirtualEventFields = suiviPreventifEnfantVirtuelFormSections.find(function (section) { return section.title === "Informations pratiques"; }).fields;
  suiviVirtualEventFields.find(function (field) { return field.path === "event.venue"; }).label = "Modalité";
  suiviVirtualEventFields.find(function (field) { return field.path === "event.address"; }).label = "Informations de connexion";
  suiviPreventifEnfantVirtuelFormSections.find(function (section) { return section.title === "Programme"; }).fields = [
    { path: "program.analysisHeading", label: "8 premiers jours — titre", type: "textarea", rows: 2 },
    { path: "program.analysisItems", label: "8 premiers jours — une ligne par point", type: "list", rows: 8 },
    { path: "program.conductHeading", label: "Jusqu’à 2 ans — titre", type: "textarea", rows: 2 },
    { path: "program.conductItems", label: "Jusqu’à 2 ans — une ligne par point", type: "list", rows: 6 }
  ];
  suiviPreventifEnfantVirtuelFormSections.find(function (section) { return section.title === "Déroulé"; }).fields.find(function (field) {
    return field.path === "schedule.meeting";
  }).label = "Réunion en classe virtuelle";

  const expositionEcransVirtuelleFormSections = formSections.map(function (section) {
    return {
      title: section.title,
      fields: section.fields.map(function (field) { return Object.assign({}, field); })
    };
  });

  expositionEcransVirtuelleFormSections.find(function (section) { return section.title === "Intervenante"; }).title = "Intervenant";
  const expositionEcransVirtualEventFields = expositionEcransVirtuelleFormSections.find(function (section) { return section.title === "Informations pratiques"; }).fields;
  expositionEcransVirtualEventFields.find(function (field) { return field.path === "event.venue"; }).label = "Modalité";
  expositionEcransVirtualEventFields.find(function (field) { return field.path === "event.address"; }).label = "Informations de connexion";
  expositionEcransVirtuelleFormSections.find(function (section) { return section.title === "Programme"; }).fields = [
    { path: "program.analysisHeading", label: "Introduction", type: "textarea", rows: 2 },
    { path: "program.analysisSecondaryHeading", label: "Développement cognitif — titre", type: "textarea", rows: 2 },
    { path: "program.analysisItems", label: "Développement cognitif — une ligne par point", type: "list", rows: 6 },
    { path: "program.conductHeading", label: "Développement somatique — titre", type: "textarea", rows: 2 },
    { path: "program.conductItems", label: "Développement somatique — une ligne par point", type: "list", rows: 6 },
    { path: "program.primaryHeading", label: "Risque d’hyper exposition", type: "textarea", rows: 2 },
    { path: "program.secondaryHeading", label: "Risque d’addiction comportementale", type: "textarea", rows: 2 },
    { path: "program.secondaryExtraHeading", label: "Réduction des risques et des dommages", type: "textarea", rows: 2 }
  ];
  expositionEcransVirtuelleFormSections.find(function (section) { return section.title === "Déroulé"; }).fields.find(function (field) {
    return field.path === "schedule.meeting";
  }).label = "Réunion en classe virtuelle";

  const desirGrossesseFormSections = formSections.map(function (section) {
    return {
      title: section.title,
      fields: section.fields.map(function (field) { return Object.assign({}, field); })
    };
  });

  desirGrossesseFormSections.find(function (section) { return section.title === "Intervenante"; }).title = "Intervenant";
  desirGrossesseFormSections.find(function (section) { return section.title === "Programme"; }).fields = [
    { path: "program.analysisHeading", label: "Physiopathologie et clinique", type: "textarea", rows: 2 },
    { path: "program.analysisSecondaryHeading", label: "Traitements médicaux", type: "textarea", rows: 2 },
    { path: "program.conductHeading", label: "Traitements chirurgicaux — titre", type: "textarea", rows: 2 },
    { path: "program.conductItems", label: "Traitements chirurgicaux — une ligne par point", type: "list", rows: 3 },
    { path: "program.primaryHeading", label: "Endométriose et infertilité — titre", type: "textarea", rows: 2 },
    { path: "program.primaryItems", label: "Endométriose et infertilité — une ligne par point", type: "list", rows: 4 },
    { path: "program.secondaryHeading", label: "Adénomyose — titre", type: "textarea", rows: 2 },
    { path: "program.secondaryItems", label: "Adénomyose — une ligne par point", type: "list", rows: 4 }
  ];

  const vertigesFormSections = formSections.map(function (section) {
    return {
      title: section.title,
      fields: section.fields.map(function (field) { return Object.assign({}, field); })
    };
  });

  vertigesFormSections.find(function (section) { return section.title === "Intervenante"; }).title = "Intervenant";
  vertigesFormSections.find(function (section) { return section.title === "Programme"; }).fields = [
    { path: "program.analysisItems", label: "Points du programme — une ligne par point", type: "list", rows: 7 }
  ];

  const tdahFormSections = formSections.map(function (section) {
    return {
      title: section.title,
      fields: section.fields.map(function (field) { return Object.assign({}, field); })
    };
  });

  tdahFormSections.find(function (section) { return section.title === "Programme"; }).fields = [
    { path: "program.analysisItems", label: "Repérage du TDAH — une ligne par point", type: "list", rows: 6 },
    { path: "program.conductHeading", label: "Prises en charge — titre", type: "textarea", rows: 2 },
    { path: "program.conductItems", label: "Prises en charge — une ligne par point", type: "list", rows: 6 },
    { path: "program.primaryHeading", label: "Prise en charge des parents — titre", type: "textarea", rows: 2 },
    { path: "program.primaryText", label: "Prise en charge des parents — texte", type: "textarea", rows: 5 },
    { path: "program.secondaryItems", label: "Discussion — une ligne par point", type: "list", rows: 2 }
  ];

  const tdahVirtuelFormSections = formSections.map(function (section) {
    return {
      title: section.title,
      fields: section.fields.map(function (field) { return Object.assign({}, field); })
    };
  });

  tdahVirtuelFormSections.find(function (section) { return section.title === "Intervenante"; }).title = "Intervenant";
  const tdahVirtualEventFields = tdahVirtuelFormSections.find(function (section) { return section.title === "Informations pratiques"; }).fields;
  tdahVirtualEventFields.find(function (field) { return field.path === "event.venue"; }).label = "Modalité";
  tdahVirtualEventFields.find(function (field) { return field.path === "event.address"; }).label = "Informations de connexion";
  tdahVirtuelFormSections.find(function (section) { return section.title === "Programme"; }).fields = [
    { path: "program.analysisItems", label: "Points du programme — une ligne par point", type: "list", rows: 9 }
  ];
  tdahVirtuelFormSections.find(function (section) { return section.title === "Déroulé"; }).fields.find(function (field) {
    return field.path === "schedule.meeting";
  }).label = "Réunion en classe virtuelle";

  const dermatoscopieFormSections = formSections.map(function (section) {
    return {
      title: section.title,
      fields: section.fields.map(function (field) { return Object.assign({}, field); })
    };
  });

  dermatoscopieFormSections.find(function (section) { return section.title === "Intervenante"; }).title = "Intervenant";
  dermatoscopieFormSections.find(function (section) { return section.title === "Programme"; }).fields = [
    { path: "program.analysisHeading", label: "1. Introduction", type: "textarea", rows: 2 },
    { path: "program.analysisSecondaryHeading", label: "2. Dermatoscope — titre", type: "textarea", rows: 2 },
    { path: "program.analysisItems", label: "2. Dermatoscope — une ligne par point", type: "list", rows: 3 },
    { path: "program.conductHeading", label: "3. Lésions mélanocytaires — titre", type: "textarea", rows: 3 },
    { path: "program.conductItems", label: "3. Lésions mélanocytaires — une ligne par point", type: "list", rows: 5 },
    { path: "program.primaryHeading", label: "4. Lésions non mélanocytaires — titre", type: "textarea", rows: 3 },
    { path: "program.primaryItems", label: "4. Lésions non mélanocytaires — une ligne par point", type: "list", rows: 3 },
    { path: "program.secondaryHeading", label: "5. Lésions bénignes", type: "textarea", rows: 2 },
    { path: "program.secondaryExtraHeading", label: "6. Applications — titre", type: "textarea", rows: 2 },
    { path: "program.secondaryItems", label: "6. Applications — une ligne par point", type: "list", rows: 3 }
  ];

  const dermatoscopieVirtuelleFormSections = dermatoscopieFormSections.map(function (section) {
    return {
      title: section.title,
      fields: section.fields.map(function (field) { return Object.assign({}, field); })
    };
  });

  const virtualEventFields = dermatoscopieVirtuelleFormSections.find(function (section) { return section.title === "Informations pratiques"; }).fields;
  virtualEventFields.find(function (field) { return field.path === "event.venue"; }).label = "Modalité";
  virtualEventFields.find(function (field) { return field.path === "event.address"; }).label = "Informations de connexion";
  dermatoscopieVirtuelleFormSections.find(function (section) { return section.title === "Déroulé"; }).fields.find(function (field) {
    return field.path === "schedule.meeting";
  }).label = "Réunion en classe virtuelle";

  const tsaFormSections = formSections.map(function (section) {
    return {
      title: section.title,
      fields: section.fields.map(function (field) { return Object.assign({}, field); })
    };
  });

  tsaFormSections.find(function (section) { return section.title === "Programme"; }).fields = [
    { path: "program.analysisItems", label: "Points du programme — une ligne par point", type: "list", rows: 12 }
  ];

  const troubleRespiratoireEnfantFormSections = formSections.map(function (section) {
    return {
      title: section.title,
      fields: section.fields.map(function (field) { return Object.assign({}, field); })
    };
  });

  troubleRespiratoireEnfantFormSections.find(function (section) { return section.title === "Intervenante"; }).title = "Intervenant";
  troubleRespiratoireEnfantFormSections.find(function (section) { return section.title === "Programme"; }).fields = [
    { path: "program.analysisHeading", label: "Tri clinique — titre", type: "textarea", rows: 2 },
    { path: "program.analysisItems", label: "Tri clinique — une ligne par point", type: "list", rows: 6 },
    { path: "program.conductHeading", label: "Démarche étiologique — titre", type: "textarea", rows: 2 },
    { path: "program.conductItems", label: "Démarche étiologique — une ligne par point", type: "list", rows: 6 },
    { path: "program.primaryHeading", label: "Thérapeutique — titre", type: "textarea", rows: 2 },
    { path: "program.primaryItems", label: "Thérapeutique — une ligne par point", type: "list", rows: 5 }
  ];

  const endometrioseFormSections = formSections.map(function (section) {
    return {
      title: section.title,
      fields: section.fields.map(function (field) { return Object.assign({}, field); })
    };
  });

  endometrioseFormSections.find(function (section) { return section.title === "Intervenante"; }).title = "Intervenant";
  endometrioseFormSections.find(function (section) { return section.title === "Programme"; }).fields = [
    { path: "program.analysisHeading", label: "Physiopathologie et clinique", type: "textarea", rows: 2 },
    { path: "program.analysisSecondaryHeading", label: "Traitements médicaux", type: "textarea", rows: 2 },
    { path: "program.conductHeading", label: "Traitements chirurgicaux — titre", type: "textarea", rows: 2 },
    { path: "program.conductItems", label: "Traitements chirurgicaux — une ligne par point", type: "list", rows: 3 },
    { path: "program.primaryHeading", label: "Endométriose et infertilité — titre", type: "textarea", rows: 2 },
    { path: "program.primaryItems", label: "Endométriose et infertilité — une ligne par point", type: "list", rows: 4 },
    { path: "program.secondaryHeading", label: "Adénomyose — titre", type: "textarea", rows: 2 },
    { path: "program.secondaryItems", label: "Adénomyose — une ligne par point", type: "list", rows: 4 }
  ];

  const dermatologiePediatrique2FormSections = formSections.map(function (section) {
    return {
      title: section.title,
      fields: section.fields.map(function (field) { return Object.assign({}, field); })
    };
  });

  dermatologiePediatrique2FormSections.find(function (section) { return section.title === "Intervenante"; }).title = "Intervenantes";
  dermatologiePediatrique2FormSections.find(function (section) { return section.title === "Programme"; }).fields = [
    { path: "program.analysisItems", label: "Éléments du programme — une ligne par point", type: "list", rows: 16 }
  ];
  dermatologiePediatrique2FormSections.find(function (section) { return section.title === "Déroulé"; }).fields = [
    { path: "schedule.selfAssessment", label: "Étape 1", type: "textarea", rows: 2 },
    { path: "schedule.meeting", label: "Étape 2", type: "textarea", rows: 2 },
    { path: "schedule.eppIntro", label: "Étape 3", type: "textarea", rows: 2 },
    { path: "schedule.extraStep4", label: "Étape 4", type: "textarea", rows: 2 },
    { path: "schedule.extraStep5", label: "Étape 5", type: "textarea", rows: 2 }
  ];

window.templates = {
  cephalees: {
    id: "cephalees",
    name: "📍 Céphalées",
    coverImage: "assets/images/couverture-cephalees.jpg",
    imageAlt: "",
    data: cephaleesData,
    formSections: formSections
  },

  dermatologie: {
    id: "dermatologie",
    name: "📍 Dermatologie Diagnostique",
    coverImage: "assets/images/couverture-diag-dermato.jpg",
    imageAlt: "Examen dermatologique d’une patiente",
    data: dermatologieData,
    formSections: dermatologieFormSections
  },

  dermatologiePediatrique: {
    id: "dermatologie-pediatrique",
    name: "📍 Dermatologie Pédiatrique",
    coverImage: "assets/images/couverture-dermato-pediatrique.jpg",
    imageAlt: "Examen dermatologique d’une patiente",
    data: dermatologiePediatriqueData,
    formSections: dermatologiePediatriqueFormSections
  },

  dermatologiePediatrique2: {
    id: "dermatologie-pediatrique-2",
    name: "📍 Dermatologie Pédiatrique 2",
    coverImage: "assets/images/couverture-dermato-pediatrique2.jpg",
    imageAlt: "Consultation de dermatologie pédiatrique",
    welcomeIcon: "assets/icons/coffee.svg",
    data: dermatologiePediatrique2Data,
    formSections: dermatologiePediatrique2FormSections
  },

  dermatoscopie: {
    id: "dermatoscopie",
    name: "📍 Dermatoscopie",
    coverImage: "assets/images/couverture-dermatoscopie.jpg",
    imageAlt: "Examen dermatologique avec un dermatoscope",
    data: dermatoscopieData,
    formSections: dermatoscopieFormSections
  },

  dermatoscopieVirtuelle: {
    id: "dermatoscopie-virtuelle",
    name: "💻 Dermatoscopie",
    modality: "classe-virtuelle",
    coverImage: "assets/images/couverture-cv-dermatoscopie.jpg",
    imageAlt: "Classe virtuelle consacrée à la dermatoscopie",
    placeIcon: "assets/icons/desktop-computer.svg",
    data: dermatoscopieVirtuelleData,
    formSections: dermatoscopieVirtuelleFormSections
  },

  desirGrossesse: {
    id: "desir-grossesse",
    name: "📍 Désir de grossesse",
    coverImage: "assets/images/couverture-desir-grossesse.jpg",
    imageAlt: "Consultation médicale autour d’un projet de grossesse",
    data: desirGrossesseData,
    formSections: desirGrossesseFormSections
  },

  endometriose: {
    id: "endometriose",
    name: "📍 Endométriose",
    coverImage: "assets/images/couverture-endometriose.jpg",
    imageAlt: "Consultation gynécologique autour de l’endométriose",
    data: endometrioseData,
    formSections: endometrioseFormSections
  },

  expositionEcransVirtuelle: {
    id: "exposition-ecrans-virtuelle",
    name: "💻 Exposition aux écrans",
    modality: "classe-virtuelle",
    coverImage: "assets/images/couverture-cv-exposition-ecrans.jpg",
    imageAlt: "Classe virtuelle consacrée à l’exposition des enfants et des adolescents aux écrans",
    data: expositionEcransVirtuelleData,
    formSections: expositionEcransVirtuelleFormSections
  },

  suiviPreventifEnfant: {
    id: "suivi-preventif-enfant",
    name: "📍 Suivi préventif de l’enfant",
    coverImage: "assets/images/couverture-1000jours.jpg",
    imageAlt: "Consultation pédiatrique d’un nourrisson avec ses parents",
    data: suiviPreventifEnfantData,
    formSections: suiviPreventifEnfantFormSections
  },

  suiviPreventifEnfantVirtuel: {
    id: "suivi-preventif-enfant-virtuel",
    name: "💻 Suivi préventif de l’enfant",
    modality: "classe-virtuelle",
    coverImage: "assets/images/couverture-cv-suivi-preventif-enfant.jpg",
    imageAlt: "Classe virtuelle consacrée au suivi préventif de l’enfant",
    data: suiviPreventifEnfantVirtuelData,
    formSections: suiviPreventifEnfantVirtuelFormSections
  },

  tdah: {
    id: "tdah",
    name: "📍 TDAH",
    coverImage: "assets/images/couverture-tdah.jpg",
    imageAlt: "Consultation pédiatrique autour du TDAH",
    data: tdahData,
    formSections: tdahFormSections
  },

  tdahVirtuel: {
    id: "tdah-virtuelle",
    name: "💻 TDAH",
    modality: "classe-virtuelle",
    coverImage: "assets/images/couverture-cv-tdah.jpg",
    imageAlt: "Classe virtuelle consacrée au TDAH",
    data: tdahVirtuelData,
    formSections: tdahVirtuelFormSections
  },

  troubleRespiratoireEnfant: {
    id: "trouble-respiratoire-enfant",
    name: "📍 Trouble respiratoire de l’enfant",
    coverImage: "assets/images/couverture-trouble-respiratoire-enfant.jpg",
    imageAlt: "Consultation pédiatrique pour un trouble respiratoire aigu",
    data: troubleRespiratoireEnfantData,
    formSections: troubleRespiratoireEnfantFormSections
  },

  tsa: {
    id: "tsa",
    name: "📍 TSA",
    coverImage: "assets/images/couverture-tsa.jpg",
    imageAlt: "Consultation médicale autour des troubles du spectre de l’autisme",
    data: tsaData,
    formSections: tsaFormSections
  },

  vertiges: {
    id: "vertiges",
    name: "📍 Vertiges",
    coverImage: "assets/images/couverture-vertiges.jpg",
    imageAlt: "Consultation médicale pour des vertiges",
    data: vertigesData,
    formSections: vertigesFormSections
  }
};
}());
