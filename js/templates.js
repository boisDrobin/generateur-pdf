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
      selfAssessment: "Questionnaire d’autoévaluation et grille d’audit à remplir et retourner par e-mail avant la réunion.",
      meeting: "Réunion présentielle du 17 Septembre 2026 de 20h00 à 23h00 à la Brasserie Jules d’Amiens",
      eppIntro: "3 mois après la formation présentielle, 2ème tour d'EPP à réaliser du 17/12 au 31/12:",
      eppItems: ["Audit Clinique", "Questionnaire d’évaluation", "Votre avis sur la formation"]
    },
    registration: {
      heading: "INSCRIPTION OBLIGATOIRE",
      accountLabel: "Connexion à votre compte",
      accountUrl: "https://www.agencedpc.fr/professionnel/",
      searchInstruction: "Cliquez sur \"Actions DPC\" puis sur \"Rechercher une action / S’inscrire\".",
      actionIntro: "Entrez la référence de l’action :",
      actionAfterReference: "à gauche de l’écran.",
      detailsInstruction: "Cliquez sur \"Rechercher\" puis \"Détail\" et \"liste des sessions\".",
      sessionLead: "Cliquez sur l’onglet \"S’inscrire\"",
      sessionContext: "de la session concernée",
      validationInstruction: "Puis validez votre inscription."
    },
    contacts: {
      heading: "CONTACTEZ-NOUS",
      people: [
        {
          name: "Catherine HORAUD",
          role: "Responsable de projets DPC",
          phone: "06.33.05.67.38",
          email: "cathymedical.s@gmail.com"
        },
        {
          name: "Maryline THOMAS",
          role: "Assistante administrative",
          phone: "06.67.57.88.89",
          email: "marylinemedical.s@gmail.com"
        }
      ]
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
        { path: "contacts.people.0.name", label: "Contact 1 — nom" },
        { path: "contacts.people.0.role", label: "Contact 1 — fonction" },
        { path: "contacts.people.0.phone", label: "Contact 1 — téléphone" },
        { path: "contacts.people.0.email", label: "Contact 1 — e-mail" },
        { path: "contacts.people.1.name", label: "Contact 2 — nom" },
        { path: "contacts.people.1.role", label: "Contact 2 — fonction" },
        { path: "contacts.people.1.phone", label: "Contact 2 — téléphone" },
        { path: "contacts.people.1.email", label: "Contact 2 — e-mail" }
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

  window.templates = {
    cephalees: {
      id: "cephalees",
      name: "Céphalées",
      data: cephaleesData,
      formSections: formSections
    }
  };
}());
