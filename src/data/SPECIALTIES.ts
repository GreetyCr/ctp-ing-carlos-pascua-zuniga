import { Specialty } from "@/types";

export const SPECIALTIES: Specialty[] = [
  {
    id: "gestion-calidad",
    name: "Gestión de la Calidad",
    description: "Forma técnicos altamente capacitados para diseñar, implementar y mejorar sistemas de calidad en procesos productivos, administrativos o de servicio según normativas internacionales como ISO 9001.",
    duration: "3 años",
    modality: "Presencial",
    icon: "Award",
    totalHours: 2840,
    profile: [
      "Implementa sistemas de gestión bajo estándares internacionales",
      "Aplica control estadístico de procesos",
      "Realiza auditorías internas con enfoque en mejora continua",
      "Está preparado para el desarrollo profesional y estudios universitarios"
    ],
    curriculum: [
      {
        grade: "Décimo",
        subjects: [
          { name: "Control y garantía de calidad", hoursPerWeek: 16, hoursPerYear: 640 },
          { name: "Sistemas modernos de manufactura, control y calidad", hoursPerWeek: 4, hoursPerYear: 160 },
          { name: "English Oriented to Quality Management", hoursPerWeek: 4, hoursPerYear: 160 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 960
      },
      {
        grade: "Undécimo",
        subjects: [
          { name: "Sistemas modernos de manufactura, control y calidad", hoursPerWeek: 12, hoursPerYear: 480 },
          { name: "Diagnóstico industrial", hoursPerWeek: 8, hoursPerYear: 320 },
          { name: "English Oriented to Quality Management", hoursPerWeek: 4, hoursPerYear: 160 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 960
      },
      {
        grade: "Duodécimo",
        subjects: [
          { name: "Sistemas modernos de manufactura, control y calidad", hoursPerWeek: 12, hoursPerYear: 300 },
          { name: "Diagnóstico industrial", hoursPerWeek: 8, hoursPerYear: 200 },
          { name: "English Oriented to Quality Management", hoursPerWeek: 4, hoursPerYear: 100 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 600
      }
    ]
  },
  {
    id: "banca-finanzas",
    name: "Banca y Finanzas",
    description: "Prepara técnicos especializados en el sector financiero, con competencias sólidas en servicios bancarios, análisis crediticio y gestión de productos financieros para el sector más estable del país.",
    duration: "3 años",
    modality: "Presencial",
    icon: "DollarSign",
    totalHours: 2840,
    profile: [
      "Maneja servicios bancarios y productos financieros con excelencia",
      "Realiza análisis crediticio y evaluación de riesgos financieros",
      "Aplica normativas bancarias y cumplimiento regulatorio",
      "Está preparado para liderar en el sector financiero costarricense"
    ],
    curriculum: [
      {
        grade: "Décimo",
        subjects: [
          { name: "Contabilidad de gestión y administración financiera", hoursPerWeek: 12, hoursPerYear: 480 },
          { name: "Gestión en tecnologías digitales financieras", hoursPerWeek: 8, hoursPerYear: 320 },
          { name: "English Oriented to Banking and Finance", hoursPerWeek: 4, hoursPerYear: 160 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 960
      },
      {
        grade: "Undécimo",
        subjects: [
          { name: "Gestión bancaria y de mercados financieros", hoursPerWeek: 12, hoursPerYear: 480 },
          { name: "Gestión de seguros", hoursPerWeek: 8, hoursPerYear: 320 },
          { name: "English Oriented to Banking and Finance", hoursPerWeek: 4, hoursPerYear: 160 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 960
      },
      {
        grade: "Duodécimo",
        subjects: [
          { name: "Gestión financiera y legislación", hoursPerWeek: 12, hoursPerYear: 300 },
          { name: "Gestión de pensiones", hoursPerWeek: 8, hoursPerYear: 200 },
          { name: "English Oriented to Banking and Finance", hoursPerWeek: 4, hoursPerYear: 100 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 600
      }
    ]
  },
  {
    id: "contabilidad-control-interno",
    name: "Contabilidad y Control Interno",
    description: "Forma técnicos especializados en el registro, análisis, auditoría y control de operaciones financieras empresariales con dominio de normativas tributarias costarricenses y sistemas contables modernos.",
    duration: "3 años",
    modality: "Presencial",
    icon: "Calculator",
    totalHours: 2840,
    profile: [
      "Aplica principios contables y normativas fiscales costarricenses",
      "Elabora estados financieros y reportes contables precisos",
      "Maneja sistemas contables digitales y software especializado",
      "Está preparado para roles contables y de análisis financiero"
    ],
    curriculum: [
      {
        grade: "Décimo",
        subjects: [
          { name: "Gestión contable y de control interno", hoursPerWeek: 12, hoursPerYear: 480 },
          { name: "Gestión en tecnologías digitales orientadas a la auditoría", hoursPerWeek: 8, hoursPerYear: 320 },
          { name: "English Oriented to Auditing", hoursPerWeek: 4, hoursPerYear: 160 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 960
      },
      {
        grade: "Undécimo",
        subjects: [
          { name: "Gestión contable y de control interno", hoursPerWeek: 12, hoursPerYear: 480 },
          { name: "Gestión empresarial para auditores", hoursPerWeek: 8, hoursPerYear: 320 },
          { name: "English Oriented to Auditing", hoursPerWeek: 4, hoursPerYear: 160 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 960
      },
      {
        grade: "Duodécimo",
        subjects: [
          { name: "Gestión contable y de control interno", hoursPerWeek: 8, hoursPerYear: 200 },
          { name: "Gestión en costos", hoursPerWeek: 12, hoursPerYear: 300 },
          { name: "English Oriented to Auditing", hoursPerWeek: 4, hoursPerYear: 100 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 600
      }
    ]
  },
  {
    id: "desarrollo-aplicaciones-software",
    name: "Desarrollo de Aplicaciones Software",
    description: "Prepara técnicos especialistas en la creación de soluciones digitales innovadoras, desde programación móvil hasta aplicaciones de software completas para la industria tecnológica en expansión.",
    duration: "3 años",
    modality: "Presencial",
    icon: "Code",
    totalHours: 2840,
    profile: [
      "Desarrolla aplicaciones móviles nativas y multiplataforma",
      "Diseña interfaces de usuario atractivas y funcionales",
      "Maneja bases de datos y servicios web modernos",
      "Está preparado para la industria tecnológica en crecimiento"
    ],
    curriculum: [
      {
        grade: "Décimo",
        subjects: [
          { name: "Tecnologías de la Información (TI) aplicada al desarrollo de aplicaciones software", hoursPerWeek: 4, hoursPerYear: 160 },
          { name: "Desarrollo de aplicaciones software y bases de datos", hoursPerWeek: 8, hoursPerYear: 320 },
          { name: "Soporte y seguridad de aplicaciones software", hoursPerWeek: 8, hoursPerYear: 320 },
          { name: "English Oriented to Apps Development", hoursPerWeek: 4, hoursPerYear: 160 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 960
      },
      {
        grade: "Undécimo",
        subjects: [
          { name: "Emprendimiento e innovación aplicada al desarrollo de aplicaciones software", hoursPerWeek: 4, hoursPerYear: 160 },
          { name: "Desarrollo de aplicaciones software y bases de datos", hoursPerWeek: 8, hoursPerYear: 320 },
          { name: "Soporte y seguridad de aplicaciones software", hoursPerWeek: 8, hoursPerYear: 320 },
          { name: "English Oriented to Apps Development", hoursPerWeek: 4, hoursPerYear: 160 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 960
      },
      {
        grade: "Duodécimo",
        subjects: [
          { name: "Desarrollo de aplicaciones software y bases de datos", hoursPerWeek: 12, hoursPerYear: 300 },
          { name: "Soporte y seguridad de aplicaciones software", hoursPerWeek: 8, hoursPerYear: 200 },
          { name: "English Oriented to Apps Development", hoursPerWeek: 4, hoursPerYear: 100 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 600
      }
    ]
  },
  {
    id: "construccion-civil",
    name: "Construcción Civil",
    description: "Forma técnicos especializados en supervisión, control y gestión de procesos constructivos con manejo de materiales, normativas de seguridad y tecnologías modernas para el sector de infraestructura.",
    duration: "3 años",
    modality: "Presencial",
    icon: "HardHat",
    totalHours: 2840,
    profile: [
      "Supervisa procesos constructivos y control de calidad en obras",
      "Maneja materiales de construcción y técnicas especializadas",
      "Aplica normativas de seguridad ocupacional y ambiental",
      "Está preparado para liderar equipos en proyectos de infraestructura"
    ],
    curriculum: [
      {
        grade: "Décimo",
        subjects: [
          { name: "Construcción de obras civiles", hoursPerWeek: 12, hoursPerYear: 480 },
          { name: "Presupuesto y herramientas informáticas de obras civiles", hoursPerWeek: 6, hoursPerYear: 240 },
          { name: "Dibujo técnico", hoursPerWeek: 4, hoursPerYear: 160 },
          { name: "English for communication", hoursPerWeek: 2, hoursPerYear: 80 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 960
      },
      {
        grade: "Undécimo",
        subjects: [
          { name: "Construcción de obras civiles", hoursPerWeek: 12, hoursPerYear: 480 },
          { name: "Presupuesto y herramientas informáticas de obras civiles", hoursPerWeek: 6, hoursPerYear: 240 },
          { name: "Dibujo técnico", hoursPerWeek: 4, hoursPerYear: 160 },
          { name: "English for communication", hoursPerWeek: 2, hoursPerYear: 80 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 960
      },
      {
        grade: "Duodécimo",
        subjects: [
          { name: "Construcción de obras civiles", hoursPerWeek: 12, hoursPerYear: 300 },
          { name: "Presupuesto y herramientas informáticas de obras civiles", hoursPerWeek: 6, hoursPerYear: 150 },
          { name: "Dibujo técnico", hoursPerWeek: 4, hoursPerYear: 100 },
          { name: "English for communication", hoursPerWeek: 2, hoursPerYear: 50 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 600
      }
    ]
  },
  {
    id: "dibujo-modelado-edificaciones",
    name: "Dibujo y Modelado para Edificaciones",
    description: "Forma técnicos especializados en diseño arquitectónico, modelado 3D y dibujo técnico combinando herramientas CAD modernas con fundamentos de arquitectura y construcción.",
    duration: "3 años",
    modality: "Presencial",
    icon: "Ruler",
    totalHours: 2840,
    profile: [
      "Domina software CAD y herramientas de modelado 3D profesionales",
      "Crea planos arquitectónicos técnicos precisos y detallados",
      "Desarrolla modelos tridimensionales para proyectos de edificación",
      "Preparado para el área de arquitectura e ingeniería"
    ],
    curriculum: [
      {
        grade: "Décimo",
        subjects: [
          { name: "Modelado arquitectónico asistido por computadora", hoursPerWeek: 12, hoursPerYear: 480 },
          { name: "Técnicas de presentación y modelos", hoursPerWeek: 4, hoursPerYear: 160 },
          { name: "Dibujo y diseño arquitectónico y urbanístico", hoursPerWeek: 4, hoursPerYear: 160 },
          { name: "English Oriented to Drawing and Modeling of Buildings", hoursPerWeek: 4, hoursPerYear: 160 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 960
      },
      {
        grade: "Undécimo",
        subjects: [
          { name: "Modelado arquitectónico asistido por computadora", hoursPerWeek: 12, hoursPerYear: 480 },
          { name: "Dibujo y diseño arquitectónico y urbanístico", hoursPerWeek: 4, hoursPerYear: 160 },
          { name: "Emprendimiento e innovación aplicada al Dibujo y modelado para edificaciones", hoursPerWeek: 4, hoursPerYear: 160 },
          { name: "English Oriented to Drawing and Modeling of Buildings", hoursPerWeek: 4, hoursPerYear: 160 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 960
      },
      {
        grade: "Duodécimo",
        subjects: [
          { name: "Modelado arquitectónico asistido por computadora", hoursPerWeek: 12, hoursPerYear: 300 },
          { name: "Técnicas de presentación y modelos", hoursPerWeek: 4, hoursPerYear: 100 },
          { name: "Dibujo y diseño arquitectónico y urbanístico", hoursPerWeek: 4, hoursPerYear: 100 },
          { name: "English Oriented to Drawing and Modeling of Buildings", hoursPerWeek: 4, hoursPerYear: 100 }
        ],
        totalHoursPerWeek: 24,
        totalHoursPerYear: 600
      }
    ]
  }
];
