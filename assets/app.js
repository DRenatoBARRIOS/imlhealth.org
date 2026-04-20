const axes = ["Standards", "Connectivity", "Identity", "Adoption", "Security", "Correction"];

const countries = {
  "Argentina": {
    "score": 76,
    "subtitle": "A nationally coordinated digital-health trajectory built around the Red Nacional de Salud Digital and Historia de Salud Integrada, with a strong emphasis on distributed records, interoperability and patient-controlled access permissions.",
    "values": [78, 74, 72, 77, 73, 63],
    "strengths": [
      "Red Nacional de Salud Digital as a national interoperability strategy",
      "Historia de Salud Integrada as a distributed shared health-record model",
      "A legal framework for electronic clinical records and patient rights"
    ],
    "watch": [
      "Operational maturity can vary across jurisdictions and providers",
      "Nationwide implementation depends on provincial and municipal adoption",
      "Correction and feedback remain analytically distinct from shared-record availability"
    ],
    "examples": [
      "The Red Nacional de Salud Digital is designed to ensure interoperability across jurisdictions and subsectors.",
      "Historia de Salud Integrada stores the shared record in distributed form across points of care rather than in a single centralized repository.",
      "Argentina’s legal framework establishes a national electronic health-record registration system."
    ],
    "sources": [
      "Argentina Ministry of Health · Red Nacional de Salud Digital",
      "Argentina Ministry of Health · Historia de Salud Integrada",
      "Argentina.gob.ar · Electronic Health Record Law"
    ]
  },
  "Australia": {
    "score": 81,
    "subtitle": "A mature national digital-health environment built around purpose-specific healthcare identifiers, My Health Record connectivity and strong governance for secure information exchange.",
    "values": [82, 84, 87, 74, 85, 64],
    "strengths": [
      "National Healthcare Identifiers Service for individuals, providers and organisations",
      "My Health Record as a broad national sharing layer",
      "Explicit interoperability and conformance requirements under national digital-health governance"
    ],
    "watch": [
      "Operational maturity remains uneven across software and care settings",
      "Practical public trust and recourse remain analytically distinct from core infrastructure",
      "Full longitudinal integration across sectors still depends on local implementation quality"
    ],
    "examples": [
      "Australia’s Healthcare Identifiers Service provides unique identifiers for individuals, providers and organisations.",
      "The HI Service supports My Health Record, electronic prescribing and secure messaging.",
      "The Australian Digital Health Agency defines interoperability requirements and conformance for My Health Record-connected systems."
    ],
    "sources": [
      "Australian Government · Healthcare Identifiers Service",
      "Australian Digital Health Agency · Interoperability",
      "Australian Digital Health Developer Portal · My Health Record"
    ]
  },
  "Brazil": {
    "score": 82,
    "subtitle": "A large-scale national interoperability effort centred on the RNDS, strengthened by SUS Digital and the citizen-facing Meu SUS Digital environment, with growing federal reach across states and municipalities.",
    "values": [84, 85, 76, 80, 81, 67],
    "strengths": [
      "RNDS as the official national interoperability platform",
      "Meu SUS Digital for citizen access to records, medicines and laboratory information",
      "SUS Digital with nationwide adhesion across states and municipalities"
    ],
    "watch": [
      "Scale and federal complexity still create uneven implementation depth",
      "Identity and continuity of care improve within the platform but remain dependent on local integration quality",
      "Correction and recourse maturity remains less visible than architecture and reach"
    ],
    "examples": [
      "The Ministry of Health describes RNDS as the official interoperability platform for secure and standardized health-data exchange.",
      "Meu SUS Digital gives citizens access to health information, including medicines, vaccines and laboratory results fed by RNDS.",
      "SUS Digital reports adhesion by all states, the Federal District and all municipalities."
    ],
    "sources": [
      "Brazil Ministry of Health · RNDS",
      "Brazil Ministry of Health · Meu SUS Digital",
      "Brazil Ministry of Health · SUS Digital"
    ]
  },
  "Canada": {
    "score": 73,
    "subtitle": "A serious interoperability trajectory shaped by strong policy vision, but constrained by a multi-jurisdictional landscape and uneven implementation across provinces and territories.",
    "values": [71, 76, 68, 74, 77, 58],
    "strengths": [
      "Pan-Canadian interoperability roadmap",
      "Strong digital health policy capacity",
      "Institutional recognition of connected care priorities"
    ],
    "watch": [
      "Jurisdictional fragmentation",
      "Variable implementation maturity",
      "Complexity of sustained coordination"
    ],
    "examples": [
      "The shared pan-Canadian interoperability roadmap aims to connect providers and organisations through standardised technologies and data.",
      "Health Canada presents interoperability as a building block for modern, connected care.",
      "Canada’s challenge is not lack of direction, but the long-term orchestration of a federated environment."
    ],
    "sources": [
      "Canada Health Infoway · Shared Pan-Canadian Interoperability Roadmap",
      "Health Canada · Connecting You to Modern Health Care",
      "Canada Health Infoway · Interoperability resources"
    ]
  },
  "Costa Rica": {
    "score": 74,
    "subtitle": "A relatively advanced digital health trajectory centred on the EDUS model, combining a unified digital health record, patient-facing access and medication-related information within the social security system.",
    "values": [73, 75, 70, 78, 72, 60],
    "strengths": [
      "EDUS as a recognisable nationwide digital health record model",
      "Patient-facing mobile access through the official CCSS application",
      "Medication, diagnosis and appointment information made visible within a single service environment"
    ],
    "watch": [
      "National coherence is stronger inside the CCSS environment than across all possible system layers",
      "Interoperability visibility outside the core institutional setting is less explicit",
      "Correction and feedback capacity is still analytically separate from record availability"
    ],
    "examples": [
      "The official CCSS EDUS application allows access to information from the Expediente Digital Único en Salud.",
      "The app includes appointments, prescribed medicines, diagnoses and allergies when the relevant care site has implemented EDUS.",
      "The model shows how a patient-facing health record environment can support integrated service use inside a national social security framework."
    ],
    "sources": [
      "CCSS · App EDUS",
      "CCSS · EDUS terms and conditions"
    ]
  },
  "Estonia": {
    "score": 91,
    "subtitle": "A compact and highly coherent model combining digital identity, secure exchange and nationwide health information infrastructure.",
    "values": [90, 93, 95, 87, 89, 76],
    "strengths": [
      "X-Road as a secure exchange backbone",
      "Strong digital identity ecosystem",
      "Nationally connected health information services"
    ],
    "watch": [
      "Strong dependence on central institutional coherence",
      "Partial transposability to more fragmented states",
      "Scale advantage may not generalise"
    ],
    "examples": [
      "Estonia’s national health information system has connected providers at national scale since 2008.",
      "X-Road provides a secure interoperability layer across public and private systems.",
      "The eID ecosystem is designed to preserve a coherent digital identity across multiple channels."
    ],
    "sources": [
      "e-Estonia · e-Health Records",
      "e-Estonia · X-Road",
      "RIA · Estonian eID ecosystem"
    ]
  },
  "Ethiopia": {
    "score": 61,
    "subtitle": "A digital health ecosystem with clear national coordination, community-level digitisation and formal digital-identity foundations, while large-scale integration remains uneven across the full care continuum.",
    "values": [64, 58, 62, 66, 57, 49],
    "strengths": [
      "A dedicated Digital Health Lead Executive Office with an explicit mandate for architecture and interoperability",
      "eCHIS and DHIS2 as visible national digital health systems",
      "A legal foundation for a national digital identification system"
    ],
    "watch": [
      "Interoperability maturity remains uneven across system layers",
      "Health-identity linkage is still less consolidated than in leading reference countries",
      "Correction and feedback mechanisms are less visible in public documentation"
    ],
    "examples": [
      "The Ministry of Health presents eCHIS as a high-priority initiative for digitising community health information.",
      "The Ministry of Health states that DHIS2 is used for collecting and analysing health data.",
      "The Digital Health Lead Executive Office explicitly mandates architecture, interoperability standards and inclusive digital health frameworks."
    ],
    "sources": [
      "Ethiopia Ministry of Health · Digital Health Systems",
      "Ethiopia Ministry of Health · DHIS2",
      "Ethiopia Ministry of Health · Digital Health Lead Executive Office",
      "WHO · Ethiopian Digital Identification Proclamation No 1284/2023"
    ]
  },
  "France": {
    "score": 65,
    "subtitle": "A legally elaborate and highly structured ecosystem with a strong health-identity foundation and advanced doctrine, but materially constrained by administrative bottlenecks, exhaustive validation routines and weak practical correction capacity, which together reduce operational maturity.",
    "values": [70, 62, 84, 50, 84, 20],
    "strengths": [
      "National Health Identity (INS) as a reference identity layer",
      "Pro Santé Connect for professional authentication",
      "A mature national interoperability doctrine and CI-SIS framework"
    ],
    "watch": [
      "Administrative and validation routines can protect existing structures instead of accelerating public-interest correction",
      "Uneven operational implementation across actors despite exhaustive regulation",
      "Weak practical correction and feedback loop in critical cases"
    ],
    "examples": [
      "The INS framework defines national identity usage conditions, implementation guidance and identity vigilance rules.",
      "Pro Santé Connect supports trusted authentication for health professionals.",
      "The French interoperability doctrine relies on CI-SIS and a progressive transition toward FHIR in priority areas."
    ],
    "sources": [
      "ANS · Référentiel INS",
      "ANS · Pro Santé Connect",
      "Doctrine du numérique en santé · Interoperability",
      "Mon espace santé / DMP documentation"
    ],
    "critique": {
      "title": "Analytical note · Criterion 6 in France",
      "finding": "France has formal mechanisms for correction, complaints and recourse across identity, quality and information governance, and an extensive legislative and doctrinal framework. However, the study distinguishes the existence of these mechanisms from their practical effectiveness.",
      "case": "An analysed case involving urgent medical tests points to significant delays and insufficient information returned to the prescribing physician, despite the expectation of timely information flows in a digital health environment.",
      "institutional": "The interactions reported with the ARS and the CDC suggest systemic weaknesses in the way certain public-health responsibilities are supervised or delegated to private organisations.",
      "information": "The difficulty is reinforced by the limited analytical value of health information when laboratory results are sent into the DMP in PDF form rather than as structured and interoperable data.",
      "implication": "Within IML, France therefore scores markedly lower on standards-in-practice, adoption, correction, recourse and feedback than on identity or formal doctrine."
    }
  },
  "Guatemala": {
    "score": 52,
    "subtitle": "A foundational identity system exists and digital transformation policy explicitly mentions identifiers and interoperability, but health-sector integration remains comparatively early and uneven.",
    "values": [54, 46, 62, 43, 55, 33],
    "strengths": [
      "RENAP maintains the unique civil identification registry and issues the DPI",
      "Interinstitutional RENAP-MSPAS coordination exists",
      "The current digital transformation agenda explicitly includes digital identifiers and interoperability"
    ],
    "watch": [
      "Health-sector interoperability remains early-stage",
      "Operational connection between identity and care pathways is still limited",
      "Correction and feedback loops are not yet strongly evidenced at ecosystem scale"
    ],
    "examples": [
      "RENAP is responsible for the unique identification registry and the Documento Personal de Identificación.",
      "RENAP and MSPAS have an interinstitutional coordination agreement linking civil registration and health information concerns.",
      "Guatemala’s digital transformation strategy explicitly identifies digital identifiers and interoperability platforms as core infrastructure."
    ],
    "sources": [
      "RENAP · Institutional information",
      "RENAP · RENAP-MSPAS coordination agreement",
      "Transformación Digital Guatemala · Digital infrastructure",
      "Transformación Digital Guatemala · Principles"
    ]
  },
  "India": {
    "score": 79,
    "subtitle": "A very large digital-health identity ecosystem built around the Ayushman Bharat Digital Mission, with ABHA, provider and facility registries, and controlled health-record linking under a national governance framework.",
    "values": [80, 81, 86, 74, 79, 61],
    "strengths": [
      "ABHA as a national health account and access layer",
      "Healthcare Professionals Registry and Health Facility Registry as structured ecosystem registries",
      "A citizen-facing personal-health-record logic with consent-linked record viewing and linking"
    ],
    "watch": [
      "Implementation depth can vary across states, providers and software readiness levels",
      "Scale and diversity create uneven real-world adoption",
      "Correction and feedback capacity is less legible than the identity and registry architecture"
    ],
    "examples": [
      "ABDM positions ABHA as a core digital health account for the ecosystem.",
      "The Health Facility Registry is described as a comprehensive repository of facilities across public and private sectors.",
      "The Healthcare Professionals Registry provides a unique digital identifier for verified professionals."
    ],
    "sources": [
      "ABDM · Health Facility Registry",
      "ABDM · Healthcare Professionals Registry",
      "ABDM / NHA · Health Records / PHR information"
    ]
  },
  "Japan": {
    "score": 84,
    "subtitle": "A mature identity-linked health access environment combined with a strong regulatory data infrastructure for medicines safety and real-world analysis.",
    "values": [82, 85, 88, 79, 86, 67],
    "strengths": [
      "My Number Card is now central to health insurance eligibility confirmation",
      "Strong identity-linked access to care and pharmacy workflows",
      "MID-NET provides a large-scale medical information database for medicines safety analysis"
    ],
    "watch": [
      "Identity-linked health access still requires careful governance and public trust management",
      "Operational maturity in insurance eligibility does not automatically equal full-system interoperability in every care domain",
      "Correction and recourse remain analytically distinct from technical maturity"
    ],
    "examples": [
      "Japan’s system has shifted to one based on the My Number Card as the health insurance certificate.",
      "The Digital Agency describes online eligibility confirmation and identity verification through My Number Card-based workflows.",
      "PMDA’s MID-NET makes electronic medical records, claims and related data available for medicines safety uses at large scale."
    ],
    "sources": [
      "Digital Agency Japan · Use of health insurance card in My Number Card",
      "Digital Agency Japan · My Number scheme",
      "PMDA · MID-NET"
    ]
  },
  "Morocco": {
    "score": 55,
    "subtitle": "An ecosystem in transition, supported by broader digital transformation efforts, but still requiring stronger convergence between identity, service delivery and health-sector interoperability.",
    "values": [58, 49, 52, 61, 56, 34],
    "strengths": [
      "Digital Morocco 2030 strategic direction",
      "National ID-based authentication service",
      "Potential alignment between state modernisation and social service delivery"
    ],
    "watch": [
      "Sector-specific health interoperability remains less visible",
      "Identity and care pathways require tighter integration",
      "Correction and recourse capacity is still maturing"
    ],
    "examples": [
      "Digital Morocco 2030 presents digital transformation as a social and economic development lever.",
      "A CNIE-based identification and authentication service has been launched by national authorities.",
      "A World Bank-supported identity and targeting project aims to strengthen inclusion and service access."
    ],
    "sources": [
      "Digital Morocco 2030",
      "ADD / DGSN · CNIE authentication service",
      "World Bank · Morocco Identity and Targeting for Social Protection Project"
    ]
  },
  "New Zealand": {
    "score": 83,
    "subtitle": "A longstanding health-identity environment built around the National Health Index, with strong identity governance and broad use across hospitals, general practice, pharmacies and other services.",
    "values": [81, 82, 90, 77, 84, 66],
    "strengths": [
      "National Health Index as a unique identifier for health-care users",
      "Longstanding cross-setting use across hospitals, GPs, pharmacies and laboratories",
      "Clear privacy, access and statement-of-use framing for health identity"
    ],
    "watch": [
      "Identity maturity does not automatically mean identical interoperability maturity in every domain",
      "Operational integration still depends on connected systems beyond the identifier layer",
      "Correction and recourse remain analytically distinct from identity strength"
    ],
    "examples": [
      "The National Health Index is the unique identifier assigned to everyone who uses health and disability support services in New Zealand.",
      "Health New Zealand states that the NHI is used by hospitals, family doctors, pharmacies, laboratories and midwives.",
      "The NHI statement of use frames the identifier as a cornerstone of clinical and administrative patient-related information."
    ],
    "sources": [
      "Health New Zealand · National Health Index",
      "Health New Zealand · NHI Statement of Use",
      "Health New Zealand · Health Identity"
    ]
  },
  "Russia": {
    "score": 63,
    "subtitle": "A centrally steered digital-health trajectory with state-led information-system ambitions, including EGISZ and broader healthcare modernisation goals, though public documentation is less transparent and less clinically granular than in some comparator countries.",
    "values": [66, 64, 58, 63, 62, 45],
    "strengths": [
      "State-led health IT strategy and information-system ambition",
      "EGISZ as a visible federal reference point for digital health infrastructure",
      "Longstanding policy emphasis on technological modernisation in healthcare"
    ],
    "watch": [
      "Public transparency and documentation depth are more limited than in several peer systems",
      "Identity-health linkage is less clearly documented in accessible public sources",
      "Correction, recourse and feedback remain difficult to assess from the current public evidence base"
    ],
    "examples": [
      "The Russian Ministry of Health has publicly referred to EGISZ as a unified state information system in healthcare.",
      "Official government material on healthcare development emphasises IT solutions and technological upgrading of the sector.",
      "The accessible public evidence supports reading Russia as a state-driven digital health case, while leaving some operational details less visible."
    ],
    "sources": [
      "Ministry of Health of the Russian Federation · EGISZ",
      "Government of the Russian Federation · Healthcare Development"
    ]
  },
  "Senegal": {
    "score": 57,
    "subtitle": "A promising but still uneven trajectory where digital economy reforms, biometric identity and health-system strengthening are visible, while integrated health identity and interoperability remain less consolidated.",
    "values": [60, 52, 57, 58, 51, 36],
    "strengths": [
      "Biometric ECOWAS identity card framework",
      "World Bank-supported digital economy reforms",
      "Recent health-system strengthening agenda emphasising information systems and data use"
    ],
    "watch": [
      "Health interoperability architecture is not yet as visible or mature as in leading reference countries",
      "Identity-to-health integration remains partially evidenced",
      "Correction, recourse and feedback mechanisms appear less documented in public sources"
    ],
    "examples": [
      "Senegal adopted the ECOWAS biometric identity card framework, signalling a stronger digital identity base.",
      "World Bank support for Senegal’s digital economy emphasised stronger ICT policy and institutional foundations.",
      "The NAATANGUE 2030 health program highlights health information systems and data use as systemic improvement priorities."
    ],
    "sources": [
      "Service Public Sénégal · ECOWAS biometric identity card",
      "World Bank · Senegal digital economy support",
      "World Bank · NAATANGUE 2030 health system program"
    ]
  },
  "Sweden": {
    "score": 88,
    "subtitle": "A strong, medication-centred digital health ecosystem combining e-prescriptions, a national medication list and identity-and-authorisation safeguards for access to sensitive information.",
    "values": [86, 90, 84, 85, 92, 70],
    "strengths": [
      "Very high e-prescription adoption",
      "National Medication List as a shared information source",
      "Strong identity and authorisation requirements for access"
    ],
    "watch": [
      "Correction and recourse still require governance beyond technical access control",
      "Interoperability strengths are clearer in medicines than in all care domains",
      "A mature architecture still needs visible public-interest feedback channels"
    ],
    "examples": [
      "The Swedish eHealth Agency states that around 99 percent of prescriptions are electronic.",
      "The National Medication List gives healthcare, pharmacies and the patient access to the same up-to-date prescribing and dispensing information.",
      "The Agency’s security solution places strict requirements on identity and authorisation so that the right person sees the right information."
    ],
    "sources": [
      "Swedish eHealth Agency · How prescriptions for medicinal products work in Sweden",
      "Swedish eHealth Agency · National Medication List",
      "Swedish eHealth Agency · Security solution"
    ]
  },
  "Tanzania": {
    "score": 67,
    "subtitle": "A structured digital health trajectory with a formal strategy, enterprise architecture and client-registry ambitions, supported by an increasingly coordinated digital health governance model.",
    "values": [69, 70, 61, 68, 63, 55],
    "strengths": [
      "A National Digital Health Strategy with explicit interoperability and registry objectives",
      "A Centre for Digital Health supporting coordination and implementation",
      "A health enterprise architecture designed for interoperability and data exchange"
    ],
    "watch": [
      "Implementation maturity can vary across facilities and systems",
      "Identity-linked continuity across the full care pathway remains a work in progress",
      "Correction and feedback capacity is not yet as visible as core architecture ambitions"
    ],
    "examples": [
      "The National Digital Health Strategy targets stronger interoperability across systems and other sectors.",
      "The strategy explicitly calls for client and health worker registries.",
      "The Ministry of Health describes the health enterprise architecture as supporting seamless interoperability and data exchange."
    ],
    "sources": [
      "WHO CPCD · Tanzania National Digital Health Strategy 2019-2024",
      "Tanzania Ministry of Health · Services / Center for Digital Health",
      "Tanzania National Health Portal"
    ]
  },
  "United States": {
    "score": 80,
    "subtitle": "A nationally significant but structurally heterogeneous interoperability environment, combining a federal governance floor through TEFCA and USCDI with major state-level and network-level variation in operational reality.",
    "values": [82, 83, 72, 76, 84, 63],
    "strengths": [
      "TEFCA as a nationwide governance and exchange floor",
      "USCDI as a standardized core data set for nationwide exchange",
      "Strong federal policy capacity around certification, APIs and information sharing"
    ],
    "watch": [
      "Operational maturity varies significantly across states, regions, HIEs and vendor ecosystems",
      "The federal floor does not erase local disparities in implementation or governance",
      "A state-specific reading is needed for finer-grained comparison"
    ],
    "examples": [
      "TEFCA is designed as a nationwide framework for health information sharing across providers, payers, public health agencies and patients.",
      "USCDI defines the standardized data classes and elements for nationwide interoperable exchange.",
      "The U.S. case is best read as a strong national framework layered over substantial state and network variation."
    ],
    "sources": [
      "ASTP/ONC · TEFCA",
      "HealthIT.gov · Interoperability",
      "USCDI official platform"
    ]
  }
};

const markers = [
  { "name": "Argentina", "x": 246, "y": 302, "labelDx": 14, "labelDy": 4 },
  { "name": "Australia", "x": 742, "y": 324, "labelDx": 14, "labelDy": 4 },
  { "name": "Brazil", "x": 223, "y": 258, "labelDx": 12, "labelDy": 16 },
  { "name": "Canada", "x": 140, "y": 110, "labelDx": 12, "labelDy": -2 },
  { "name": "Costa Rica", "x": 216, "y": 196, "labelDx": 16, "labelDy": 18 },
  { "name": "Estonia", "x": 505, "y": 103, "labelDx": 14, "labelDy": 4 },
  { "name": "Ethiopia", "x": 518, "y": 226, "labelDx": 12, "labelDy": -8 },
  { "name": "France", "x": 470, "y": 125, "labelDx": 14, "labelDy": 4 },
  { "name": "Guatemala", "x": 182, "y": 182, "labelDx": -72, "labelDy": -10 },
  { "name": "India", "x": 662, "y": 186, "labelDx": 14, "labelDy": 4 },
  { "name": "Japan", "x": 812, "y": 166, "labelDx": 14, "labelDy": 4 },
  { "name": "Morocco", "x": 446, "y": 170, "labelDx": -36, "labelDy": -10 },
  { "name": "New Zealand", "x": 805, "y": 350, "labelDx": 14, "labelDy": 4 },
  { "name": "Russia", "x": 690, "y": 120, "labelDx": 14, "labelDy": 4 },
  { "name": "Senegal", "x": 428, "y": 205, "labelDx": -48, "labelDy": 10 },
  { "name": "Sweden", "x": 490, "y": 88, "labelDx": 14, "labelDy": 4 },
  { "name": "Tanzania", "x": 505, "y": 274, "labelDx": 12, "labelDy": 18 },
  { "name": "United States", "x": 120, "y": 138, "labelDx": 12, "labelDy": 18 }
];

const usStates = {
  "California": {
    "score": 82,
    "subtitle": "A strong state-level interoperability profile built around the California Data Exchange Framework, with explicit whole-person care ambition, statewide governance tools and growing accountability for cross-entity exchange.",
    "values": [88, 82, 74, 78, 80, 67],
    "strengths": [
      "The Data Exchange Framework creates a statewide data sharing agreement and common policies for exchange.",
      "California explicitly links interoperability to whole-person care across health and social services.",
      "HCAI now oversees ongoing implementation, which gives the framework a clearer long-term administrative home."
    ],
    "watch": [
      "Implementation still depends on operational readiness across a very large and heterogeneous delivery system.",
      "Identity and matching practices remain less unified than the statewide governance ambition.",
      "The state is strong on governance design, but real-world correction and usage depth still need continued evidence."
    ]
  },
  "Ohio": {
    "score": 74,
    "subtitle": "A comparatively strong operational interoperability case anchored in the statewide CliniSync HIE, with substantial deployment reach and a legal environment that explicitly defines health information exchange and disclosure conditions.",
    "values": [73, 79, 68, 81, 76, 61],
    "strengths": [
      "CliniSync provides a statewide exchange environment with longitudinal record access, alerts and provider connectivity.",
      "Ohio’s model is notable for practical deployment across a large share of residents and providers.",
      "State law gives explicit definition and disclosure conditions for health information exchange."
    ],
    "watch": [
      "Ohio is stronger on operational HIE infrastructure than on a broader whole-person state reform frame like California’s DxF.",
      "Identity assurance and cross-domain linkage remain less visible than exchange functionality itself.",
      "Public-interest correction and redress mechanisms are present in law but less prominent in the interoperability narrative."
    ]
  }
};

function initIMLMap() {
  const countrySelect = document.getElementById("countrySelect");
  const markerLayer = document.getElementById("markerLayer");
  const tooltip = document.getElementById("tooltip");
  const mapWrap = document.getElementById("mapWrap");
  const profile = document.getElementById("countryProfile");
  const stateSection = document.getElementById("stateSection");

  if (!countrySelect || !markerLayer || !tooltip || !mapWrap || !profile || !stateSection) {
    return;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;"
    }[c]));
  }

  function polar(cx, cy, angle, r) {
    const rad = (angle - 90) * (Math.PI / 180);
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function polygonPoints(values, size = 320, radius = 110) {
    const cx = size / 2;
    const cy = size / 2;
    return values.map((value, i) => {
      const p = polar(cx, cy, (360 / axes.length) * i, radius * (value / 100));
      return `${p.x},${p.y}`;
    }).join(" ");
  }

  function gridPolygons(levels = 5, size = 320, radius = 110) {
    const cx = size / 2;
    const cy = size / 2;
    return Array.from({ length: levels }, (_, idx) => {
      const scale = (idx + 1) / levels;
      return axes.map((_, i) => {
        const p = polar(cx, cy, (360 / axes.length) * i, radius * scale);
        return `${p.x},${p.y}`;
      }).join(" ");
    });
  }

  function radarSvg(values, small = false) {
    const size = small ? 88 : 320;
    const radius = small ? 28 : 110;
    const cx = size / 2;
    const cy = size / 2;
    const grids = small ? 3 : 5;
    const pts = polygonPoints(values, size, radius);

    const labels = !small
      ? axes.map((axis, i) => {
          const p = polar(cx, cy, (360 / axes.length) * i, radius + 26);
          return `<text x="${p.x}" y="${p.y}" text-anchor="middle" fill="#64748b" font-size="11" font-weight="700">${axis}</text>`;
        }).join("")
      : "";

    const lines = axes.map((_, i) => {
      const p = polar(cx, cy, (360 / axes.length) * i, radius);
      return `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" stroke="#cbd5e1" stroke-width="1" />`;
    }).join("");

    const levels = gridPolygons(grids, size, radius)
      .map(points => `<polygon points="${points}" fill="none" stroke="#cbd5e1" stroke-width="1" />`)
      .join("");

    const dots = values.map((value, i) => {
      const p = polar(cx, cy, (360 / axes.length) * i, radius * (value / 100));
      return `<circle cx="${p.x}" cy="${p.y}" r="${small ? 2.4 : 4}" fill="#0f172a" />`;
    }).join("");

    return `<svg viewBox="0 0 ${size} ${size}" width="100%" height="100%" aria-hidden="true">${levels}${lines}<polygon points="${pts}" fill="rgba(15,23,42,.14)" stroke="rgba(15,23,42,.9)" stroke-width="${small ? 1.6 : 2}" />${dots}${labels}</svg>`;
  }

  function tooltipHtml(name) {
    const c = countries[name];
    return `<div class="tooltip-header"><div class="tooltip-title">${escapeHtml(name)}</div><div class="tooltip-score">${c.score}%</div></div><div class="tooltip-subtitle">${escapeHtml(c.subtitle || "")}</div><div class="mini-hex-wrap">${radarSvg(c.values, true)}</div>`;
  }

  function showTooltip(marker) {
    const rect = mapWrap.getBoundingClientRect();
    tooltip.innerHTML = tooltipHtml(marker.name);
    tooltip.classList.remove("hidden");

    const left = (marker.x / 900) * rect.width;
    const top = (marker.y / 430) * rect.height;

    const tooltipWidth = tooltip.offsetWidth || 280;
    const tooltipHeight = tooltip.offsetHeight || 140;
    const gap = 16;

    let x = marker.x > 650 ? left - tooltipWidth - gap : left + gap;
    let y = marker.y > 270 ? top - tooltipHeight + 10 : top - 10;

    x = Math.max(8, Math.min(x, rect.width - tooltipWidth - 8));
    y = Math.max(8, Math.min(y, rect.height - tooltipHeight - 8));

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
  }

  function hideTooltip() {
    tooltip.classList.add("hidden");
  }

  function metricCard(k, v, text) {
    return `<div class="metric-card"><div class="metric-k">${k}</div><div class="metric-v">${v}</div><div class="profile-subtitle">${text}</div></div>`;
  }

  function renderStateProfile(name) {
    const c = usStates[name];
    const target = document.getElementById("stateProfile");
    if (!target || !c) return;

    target.innerHTML = `
      <div class="profile-left">
        <article class="card">
          <div class="profile-header">
            <div>
              <h3>${escapeHtml(name)}</h3>
              <div class="profile-subtitle">${escapeHtml(c.subtitle)}</div>
            </div>
            <div class="score-chip">Score ${c.score}/100</div>
          </div>
          <div class="radar-wrap">${radarSvg(c.values, false)}</div>
        </article>
      </div>
      <div class="profile-right">
        <details class="explainer" open>
          <summary>Strengths</summary>
          <ul class="clean-list">${c.strengths.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </details>
        <details class="explainer">
          <summary>Points to watch</summary>
          <ul class="clean-list">${c.watch.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </details>
      </div>
    `;
  }

  function renderStateSection(countryName) {
    if (countryName !== "United States") {
      stateSection.classList.add("hidden");
      stateSection.innerHTML = "";
      return;
    }

    stateSection.classList.remove("hidden");
    const options = Object.keys(usStates)
      .map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`)
      .join("");

    stateSection.innerHTML = `
      <div class="state-box">
        <div class="section-title">
          <span class="pill light">U.S. sample-state layer</span>
          <h2>California and Ohio</h2>
          <p>This keeps the simplified U.S. sample-state menu from your uploaded file.</p>
        </div>
        <article class="card">
          <label class="field-label" for="stateSelect">Choose a U.S. sample state</label>
          <select id="stateSelect" class="select">${options}</select>
        </article>
        <div id="stateProfile" class="profile-grid"></div>
      </div>
    `;

    const select = document.getElementById("stateSelect");
    if (select) {
      select.addEventListener("change", () => renderStateProfile(select.value));
      renderStateProfile(select.value);
    }
  }

  function renderProfile(name) {
    const c = countries[name];
    if (!c) {
      profile.classList.add("hidden");
      stateSection.classList.add("hidden");
      return;
    }

    const critique = c.critique ? `
      <div class="note-box">
        <h3>${escapeHtml(c.critique.title)}</h3>
        <p><strong>Finding.</strong> ${escapeHtml(c.critique.finding)}</p>
        <p><strong>Analysed case.</strong> ${escapeHtml(c.critique.case)}</p>
        <p><strong>Institutional reading.</strong> ${escapeHtml(c.critique.institutional)}</p>
        <p><strong>Information-system limitation.</strong> ${escapeHtml(c.critique.information)}</p>
        <p><strong>Implication for IML.</strong> ${escapeHtml(c.critique.implication)}</p>
      </div>
    ` : "";

    profile.classList.remove("hidden");
    profile.innerHTML = `
      <div class="profile-left">
        <article class="card">
          <div class="profile-header">
            <div>
              <h3>${escapeHtml(name)}</h3>
              <div class="profile-subtitle">${escapeHtml(c.subtitle)}</div>
            </div>
            <div class="score-chip">Score ${c.score}/100</div>
          </div>
          <div class="radar-wrap">${radarSvg(c.values, false)}</div>
        </article>
        ${critique}
      </div>
      <div class="profile-right">
        <div class="mini-metrics">
          ${metricCard("Hexagon", "6 criteria", "Standards, connectivity, identity, adoption, security and correction.")}
          ${metricCard("Benchmark", "Country profile", "A strategic view rather than a vendor comparison.")}
          ${metricCard("Strengths", "Visible", "Assets that can accelerate interoperability maturity.")}
          ${metricCard("Watch", "Critical", "Risks, gaps or friction points that can slow scale-up.")}
        </div>
        <details class="explainer" open>
          <summary>Strengths</summary>
          <ul class="clean-list">${c.strengths.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </details>
        <details class="explainer">
          <summary>Points to watch</summary>
          <ul class="clean-list">${c.watch.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </details>
        <details class="explainer">
          <summary>Examples and supporting elements</summary>
          <ul class="clean-list">${(c.examples || []).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </details>
        <details class="explainer">
          <summary>Sources used</summary>
          <ul class="clean-list">${(c.sources || []).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </details>
      </div>
    `;

    Array.from(markerLayer.querySelectorAll(".marker")).forEach(el => {
      el.classList.toggle("selected", el.dataset.name === name);
    });

    if (countrySelect.value !== name) {
      countrySelect.value = name;
    }

    renderStateSection(name);
  }

  function buildMarkers() {
    markerLayer.innerHTML = markers.map(m => `
      <g class="marker" data-name="${escapeHtml(m.name)}">
        <circle class="halo2" cx="${m.x}" cy="${m.y}" r="30" fill="rgba(15,23,42,.05)"></circle>
        <circle class="halo1" cx="${m.x}" cy="${m.y}" r="22" fill="rgba(15,23,42,.10)"></circle>
        <circle class="core" cx="${m.x}" cy="${m.y}" r="8"></circle>
        <text x="${m.x + (m.labelDx || 14)}" y="${m.y + (m.labelDy || 4)}">${escapeHtml(m.name)}</text>
      </g>
    `).join("");

    markers.forEach(m => {
      const selector = `[data-name="${(window.CSS && CSS.escape) ? CSS.escape(m.name) : m.name.replace(/"/g, '\\"')}"]`;
      const el = markerLayer.querySelector(selector);
      if (!el) return;

      el.addEventListener("mouseenter", () => showTooltip(m));
      el.addEventListener("mouseleave", hideTooltip);
      el.addEventListener("click", () => renderProfile(m.name));
    });
  }

  function initSelect() {
    const sortedCountries = Object.keys(countries).sort((a, b) => a.localeCompare(b));
    countrySelect.innerHTML =
      `<option value="" selected>Choose a country</option>` +
      sortedCountries.map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");

    countrySelect.value = "";

    countrySelect.addEventListener("change", e => {
      if (e.target.value) {
        renderProfile(e.target.value);
      } else {
        profile.classList.add("hidden");
        stateSection.classList.add("hidden");
        Array.from(markerLayer.querySelectorAll(".marker")).forEach(el => {
          el.classList.remove("selected");
        });
      }
    });
  }

  buildMarkers();
  initSelect();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initIMLMap);
} else {
  initIMLMap();
}
