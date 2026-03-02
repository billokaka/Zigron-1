# **Global Engineering Standards for Zigron (applies to ALL engineering services)**

## **Core delivery principles (2026-grade)**

* **Code-first \+ jurisdiction-aware**: designs are produced to the **Authority Having Jurisdiction (AHJ)** requirements (US examples below) and project-specific owner specs.

* **Digital deliverables \+ traceability**: calculation packages, drawing logs, revision control, issue tracking, and QA records.

* **QA/QC as a deliverable**: design checks, interdisciplinary reviews (civil/structural/geotech/electrical), constructability review, and redline cycles.

* **BIM / information management**: where BIM is used, align information management concepts to **ISO 19650** principles (structured exchange, versioning, responsibilities).

* **Performance targets defined up front**: load cases, safety factors, deformation limits, tolerances, and acceptance procedures.

* **Automation-ready workflows** (where applicable): repeatable analysis/report generation (example: slope analysis workflow automation using Civil 3D \+ scripts \+ orchestration).

## **Common “engineering artifacts” Zigron can standardize across projects**

* Basis of Design (BoD) \+ design assumptions register

* Design criteria \+ governing codes list

* Calculation package \+ sealed-ready formatting (if client’s EOR/PE seals)

* IFC / permit-ready drawing set (as applicable)

* Material takeoffs (MTO/BOQ) \+ quantities

* QA/QC checklists \+ interdisciplinary coordination log

* Construction support pack: RFIs responses, submittal reviews support, as-builts (scope-dependent)

## **US code/standard anchors commonly referenced (by project type)**

* **Building code**: International Building Code (IBC) 2024 where adopted.

* **Loads**: ASCE/SEI 7-22 for minimum design loads and associated criteria.

* **Steel**: ANSI/AISC 360-22 (structural steel buildings).

* **Concrete**: ACI 318-25 (current) or ACI 318-19(22) depending on jurisdiction/adoption.

* **Electrical installations**: NFPA 70 (NEC) 2026 edition (where adopted / specified).

* **Transportation structures (when applicable)**: AASHTO LRFD Bridge Design Specifications 10th Edition (2024).

* **Highway geometric design (when applicable)**: AASHTO “Green Book” (7th Ed listed as current in AASHTO catalog).

* **Soil classification (geotech)**: ASTM D2487 (USCS).

* **Deep foundation acceptance guidance**: FHWA GEC 15 (Acceptance Procedures for Deep Foundations) and FHWA GEC-12 (Driven Pile Foundations reference material).

---

# **1\) `/services/engineering/engineering-consulting`**

## **Definition**

Technical engineering consulting to reduce project risk and accelerate decisions: feasibility, design criteria, peer review, constructability, value engineering, and engineering support through delivery.

## **Best-fit triggers**

* Early-stage feasibility and cost-risk decisions

* Owner/EPC needs “second set of eyes” on design assumptions and loads

* Value engineering to reduce material/installation cost without compromising code compliance

* Interdisciplinary coordination (civil/structural/geotech/electrical)

## **Deliverables (typical)**

* Design Criteria / Basis of Design (BoD)

* Governing codes list \+ load case matrix (wind, seismic, snow, operational, erection)

* Feasibility memo (options, trade-offs, risks)

* Peer review comments log \+ resolution tracking

* Value engineering proposals (material \+ constructability impact)

* Interdisciplinary coordination notes (clash/constructability concerns)

## **Inputs required**

* Project objectives \+ site location(s)

* Available surveys / geotech / load requirements

* Owner/EPC standards and target construction methods

* Draft plans/models (if reviewing)

## **KPIs / success measures**

* Decision cycle time reduction (days/weeks saved)

* Material reduction targets (where VE applies)

* RFI reduction / constructability issue reduction (later phases)

## **Acceptance criteria (definition of done)**

* Signed-off design criteria and assumptions register

* Review issues categorized by severity, with closure status

* VE options quantified (cost, schedule, risk) and decision recorded

## **Quality & risk controls**

* Formal review checklist per discipline

* Explicit “assumptions \+ limitations” section (audit-ready)

## **Cross-links**

* Often precedes: structural-engineering, civil-engineering, geotechnical-engineering, electrical-engineering

## **FAQs**

* Can you act as a peer reviewer while our EOR stays in control?

* What inputs do you need to give a reliable feasibility recommendation?

* How do you quantify VE savings and risk?

---

# **2\) `/services/engineering/cad-design-drafting`**

## **Definition**

CAD/BIM drafting and model production for permit/IFC-ready sets: 2D/3D drawings, detailing, as-builts, and drawing standards—built for revision control and downstream construction workflows.

## **Best-fit triggers**

* Need fast, consistent production drafting across many sites (solar, industrial, infrastructure)

* Need standardized drawing templates, layers, title blocks, and submittal formats

* Redlines-as-a-service (rapid cycles with traceability)

## **Deliverables**

* 2D plan sets (GA drawings, layouts, sections, details)

* 3D models (scope-dependent)

* Drawing standards pack (layers, naming, symbols, templates)

* Shop drawing support (steel/concrete details—when engineered elsewhere)

* As-built updates (redline incorporation \+ revision log)

* Quantity takeoffs (when models are structured accordingly)

## **Tools / platforms (common)**

* Autodesk **Civil 3D**, **Revit** (when BIM is in scope), plus discipline tools as needed (project-specific).

* Information management can be aligned to **ISO 19650** concepts for model/document control.

## **Inputs required**

* CAD/BIM standards (if client has them)

* Surveys, base maps, coordinate system

* Design criteria and markups/redlines

* Output formats required (DWG, RVT, IFC, PDF)

## **KPIs**

* Drafting cycle time per revision

* Drawing error rate (QA findings per sheet)

* Coordination conflicts caught pre-issue

## **Acceptance criteria**

* Sheet list complete, issued with revision history

* Layering/naming compliant with agreed standard

* QA checklist passed (dimensions, notes, callouts, references)

## **Quality controls**

* Two-pass QA: drafting QA \+ discipline QA (if calculations exist)

* Change log maintained between revisions

## **Cross-links**

* Strongly paired with: civil-engineering, structural-engineering, geotechnical-engineering

## **FAQs**

* Can you match our existing CAD/BIM standards exactly?

* Do you support IFC deliverables and structured revision control?

* How do you handle fast-turn redline cycles without errors?

---

# **3\) `/services/engineering/electrical-engineering`**

## **Definition**

Electrical design services spanning power distribution, grounding, protection concepts, and renewable integration support (including solar/BESS contexts where applicable), with code compliance and constructability focus.

## **Best-fit triggers**

* Solar plant electrical \+ BESS integration support

* Industrial facility power distribution updates

* Need coordination between civil/structural layouts and electrical routing/equipment pads

## **Deliverables (typical)**

* Single-line diagrams (SLD) / concept SLDs

* Load calculations and equipment sizing inputs (scope-dependent)

* Grounding/bonding concepts and layout support

* Cable routing/trench/conduit layout inputs (coordination with civil)

* Utility interconnection documentation support (project-specific)

* Protection coordination concepts (scope-dependent)

* Construction support pack: installation notes, schedules (as required)

## **Governing standards (project-dependent)**

* **NEC / NFPA 70** (use the edition required by AHJ/owner; NEC 2026 exists).

* **DER interconnection** often references **IEEE 1547-2018** when applicable.

## **Inputs required**

* Equipment list, voltages, utility requirements

* Site layout constraints, environmental conditions

* Owner standards (labeling, conduit, grounding)

## **KPIs**

* Permit/inspection pass rate

* Rework reduction (clash avoidance between civil/structural/electrical)

* Construction RFIs reduced via clearer routing and schedules

## **Acceptance criteria**

* Drawings and schedules consistent and coordinated with civil/structural

* Safety/clearances reflected in layouts (as applicable)

* Review comments closed with traceable updates

## **Safety & risk controls**

* Define arc-flash / labeling responsibilities (often separate study scope)

* Explicit interface boundaries with utility and OEM vendors

## **Cross-links**

* Often paired with: civil-engineering (trenching), structural-engineering (equipment supports), smart-energy-solar solution

## **FAQs**

* Which NEC edition do we design to for multi-state projects?

* Can you coordinate trenching and equipment pads with civil/structural?

* Can you support utility interconnection documentation workflows?

---

# **4\) `/services/engineering/civil-engineering`**

## **Definition**

Civil/site engineering for constructable layouts: grading, drainage, access roads, trenching coordination, earthwork quantities, and permitting-ready site plans (scope depends on jurisdiction).

## **Best-fit triggers**

* Solar/industrial multi-site rollouts requiring standardized civil packages

* Need grading/drainage and constructability optimized for cost and schedule

* Need Civil 3D-driven deliverables and consistent quantity outputs

## **Deliverables**

* Site layout plans (roads, fencing, pads, access)

* Grading plans \+ earthwork balancing inputs

* Drainage concepts and stormwater routing inputs (per local requirements)

* Trenching/cable routing coordination (with electrical)

* Erosion & sediment control plan support (jurisdiction-dependent)

* Quantity takeoffs (BOQ) and construction notes (as required)

## **Standards / references (when applicable)**

* Highway/road geometric design often references AASHTO “Green Book” guidance (client/AHJ dependent).

## **Automation differentiator (optional capability)**

* Workflow automation for repetitive engineering tasks (e.g., analysis/reporting or CAD steps) can reduce turnaround time and improve consistency (project-specific).

## **Inputs required**

* Survey/topo, geotech constraints, hydrology inputs (if required)

* Equipment layout, route constraints, construction method

* Local permitting requirements and owner standards

## **KPIs**

* Earthwork optimization (cut/fill balance improvements)

* Revision cycle time

* Field change order reduction from clearer civil coordination

## **Acceptance criteria**

* Plan set complete and internally consistent (annotations, spot elevations, drainage paths)

* Cross-discipline coordination checked (pads, anchors, trenches)

* Quantities traceable to model/drawings

## **Risk controls**

* Explicit assumptions on rainfall data, soils, and erosion control design basis

* Constructability review with access/haul routes and tolerances

## **Cross-links**

* Paired with: geotechnical-engineering, electrical-engineering, cad-design-drafting, structural-engineering

## **FAQs**

* Can you standardize civil templates across dozens of sites?

* How do you reduce grading cost while staying constructable?

* Can you coordinate civil \+ electrical trenching \+ structural pads in one package?

---

# **5\) `/services/engineering/structural-engineering`**

## **Definition**

Structural design and analysis for renewable energy, industrial, and infrastructure structures: foundations, steel/concrete systems, seismic/wind design, and retrofit/strengthening.

## **Best-fit triggers**

* Solar tracker/fixed-tilt racking structural optimization and foundation design

* Wind turbine foundation support (onshore/offshore coordination scope-dependent)

* Industrial buildings and structural retrofits

* High-rise / seismic-zone performance requirements

## **Deliverables**

* Design criteria \+ load case matrix

* Structural calculation package (foundation, steel, concrete as applicable)

* Structural drawings: framing plans, details, schedules (scope-dependent)

* Connection concepts and constructability notes

* Peer-check reports and value engineering options

* Retrofit/strengthening packages (when applicable)

## **Tools (common in Zigron materials)**

* **ANSYS** (FEA), **PLAXIS** (soil-structure interaction), **RISA-3D**, and **STAAD.Pro** where applicable.

* Load basis typically aligned to **ASCE/SEI 7-22** when required.

## **Codes / standards (project \+ jurisdiction dependent)**

* **IBC 2024** (or locally adopted IBC edition).

* **AISC 360-22** for structural steel.

* **ACI 318-25** (or ACI 318-19(22)) for concrete depending on adoption.

## **Inputs required**

* Geotech report (or soil parameters), site hazards, survey/topo

* Equipment loads, racking/tracker system info, layout constraints

* Owner specs, corrosion/environmental assumptions

## **KPIs**

* Material optimization (% steel/concrete reduction)

* Deflection/settlement limits met

* Fabrication/installation efficiency (fewer unique parts, simpler connections)

## **Acceptance criteria**

* Calculations cover governing load combinations and documented assumptions

* Drawings are coordinated with civil and electrical interfaces

* Independent check completed (internal QA/QC or client process)

## **Risk controls**

* Explicit treatment of wind/seismic governing cases and load paths

* Foundation performance checks tied to geotech parameters

* Constructability review (installation tolerances, access, sequencing)

## **Cross-links**

* Paired with: geotechnical-engineering, civil-engineering, cad-design-drafting

* Solutions alignment: smart-energy-solar

## **FAQs**

* Can you optimize foundations to reduce material without increasing risk?

* Which code editions do you design to across multiple jurisdictions?

* How do you coordinate soil-structure interaction and settlement risk?

---

# **6\) `/services/engineering/geotechnical-engineering`**

## **Definition**

Geotechnical engineering and reporting: investigations interpretation, slope stability, foundation recommendations, settlement/retaining analyses, and monitoring/reporting—plus acceptance support where deep foundations are involved.

## **Best-fit triggers**

* Solar and infrastructure sites requiring foundation feasibility and grading risk control

* Slope stability or embankment risk

* Deep foundations needing acceptance procedures and documentation

## **Deliverables (typical in Zigron materials)**

* Preliminary assessment reports

* Investigation and interpretative reports

* Analysis and design reports

* Design drawings and specifications support

* Instrumentation/monitoring data reporting

* Slope stability analysis outputs (project-dependent)

## **Tools (from Zigron materials)**

* **PLAXIS 2D**, **Slope/W**, **Seep/W**, **LPile**, **AllPile**, **Rocscience**, plus **Civil 3D** / **Revit** for coordination outputs.

## **Standards / references (when relevant)**

* Soil classification often follows **ASTM D2487 (USCS)**.

* Foundation acceptance guidance: **FHWA GEC 15** for deep foundation acceptance procedures (transportation context), and FHWA references such as driven pile foundation guidance.

## **Inputs required**

* Borelogs/lab tests (or planned investigation scope)

* Site topo, groundwater assumptions, seismicity (if applicable)

* Structural loads and foundation type preferences

* Construction constraints (equipment, access, schedule)

## **KPIs**

* Reduction in uncertainty (clear foundation recommendations \+ risk levels)

* Change order reduction from better subsurface risk treatment

* Acceptance/inspection clarity for deep foundation elements (where applicable)

## **Acceptance criteria**

* Recommendations explicitly tied to test data and assumptions

* Stability/settlement checks documented with sensitivity where needed

* Clear construction notes and monitoring/verification recommendations

## **Risk controls**

* Explicit groundwater assumptions and variability treatment

* Factor-of-safety targets stated and tied to project standard

* Construction verification plan recommended (tests, monitoring, acceptance criteria)

## **Automation differentiator (optional capability)**

* For repeatable analysis/reporting workflows (e.g., slope analysis pipelines), automation can orchestrate Civil 3D steps \+ scripts \+ report output to reduce cycle time and increase consistency (project-specific).

## **Cross-links**

* Paired with: structural-engineering, civil-engineering, cad-design-drafting

* Solutions alignment: smart-energy-solar

## **FAQs**

* What minimum investigation data is needed for reliable foundation design?

* How do you treat slope stability risk and sensitivity to groundwater?

* How do you define acceptance criteria for deep foundations?

