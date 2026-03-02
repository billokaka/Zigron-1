# **Global Zigron AI Service Standards (applies to ALL AI services)**

## **1\) Governance \+ risk baseline (2026 expectations)**

* Use an AI risk lifecycle aligned to **NIST AI RMF (Govern, Map, Measure, Manage)**.

* Maintain an AI management system posture aligned to **ISO/IEC 42001** (risk assessment → treatment, lifecycle controls, supplier oversight).

* Regulatory readiness: EU AI Act is **fully applicable 2 Aug 2026** with staged obligations earlier (e.g., GPAI obligations effective 2 Aug 2025 per EU’s timeline). Note: there has been public reporting about potential delays/changes; treat as evolving until finalized.

## **2\) Standard documentation artifacts (deliverables)**

* **Use-case brief** (business objective, constraints, harm analysis)

* **Data spec** (sources, schema, quality gates, retention, privacy class)

* **Model spec** (task, features, training approach, evaluation plan)

* **Evaluation report** (metrics \+ slices \+ robustness \+ regression)

* **Deployment plan** (serving architecture, latency/cost SLOs, rollback)

* **Monitoring plan** (drift, quality, abuse, incidents, postmortems)

* **Governance pack** (risk register, approvals, audit-ready logging)

## **3\) GenAI safety baseline (if LLMs are involved)**

* Threat model and mitigations aligned with **OWASP Top 10 for LLM Applications** (prompt injection, insecure output handling, data poisoning, model DoS, supply chain issues, etc.).

## **4\) Definition-of-done (global)**

Any AI work is “done” only when:

* **Metrics are met** on agreed test sets AND critical slices

* **Deployment works** (CI/CD, versioning, rollback)

* **Monitoring exists** (quality \+ drift \+ cost \+ abuse)

* **Security controls** match the system’s risk profile

---

# **AI Service Knowledge Files (per URL)**

Each service includes: **Definition / Best-fit / Deliverables / Inputs / KPIs / Acceptance / Safety / Cross-links / FAQs**.

---

## **1\) `/services/ai/strategy-consulting`**

### **Definition**

AI strategy that makes initiatives **buildable \+ governable \+ measurable** (portfolio selection, data readiness, risk, ROI, delivery plan).

### **Best-fit triggers**

* Many “AI ideas” but unclear ROI or feasibility

* Need governance posture (risk, compliance, human oversight)

* Unclear data availability/quality or ownership

* Need a roadmap from PoC → production

### **Deliverables**

* Use-case portfolio (scored by ROI, feasibility, risk)

* Data readiness assessment \+ gap plan

* Reference architecture (data → training → serving → monitoring)

* Evaluation plan (metrics \+ slices \+ robustness)

* Risk register aligned to NIST AI RMF functions

* Build plan: phased milestones, staffing, costs

### **Inputs required**

* Business objectives \+ process context

* Data inventory \+ access constraints

* Risk/compliance requirements (industry \+ geographies)

### **KPIs (defined at start)**

* Expected lift (accuracy, forecast error reduction, automation rate)

* Cost per inference / per outcome

* Latency targets, uptime/SLO targets

* Safety metrics (hallucination rate, refusal correctness if GenAI)

### **Acceptance criteria**

* Signed use-case roadmap \+ KPI definitions \+ risk plan

* Clear go/no-go gates for PoC and production

### **Safety considerations**

* Risk classification approach (especially for regulated domains)

* Supplier/model risk handling aligned to ISO/IEC 42001 concepts

### **Cross-links**

* Next services: data-engineering, mlops-deployment, integration-services

* Solutions: predictive-maintenance, smart-energy-solar, medical-iot-platform

### **FAQs**

* How do you choose AI projects that won’t stall after PoC?

* What data quality is “good enough” to start?

* How do you plan governance without slowing delivery?

---

## **2\) `/services/ai/data-engineering`**

### **Definition**

Build **reliable data foundations** for AI: pipelines, quality, lineage, feature readiness, and secure access.

### **Best-fit**

* Data scattered across systems (IoT/SCADA/ERP/app logs)

* Need streaming \+ batch pipelines

* Need “single source of truth” for KPIs and model features

### **Deliverables**

* Data ingestion pipelines (batch/stream)

* Canonical schemas \+ event contracts

* Data quality gates (completeness, validity, timeliness)

* Feature-ready datasets / feature store integration (if used)

* Access controls \+ audit logging for sensitive data

* Documentation: data dictionary \+ lineage notes

### **Inputs**

* Source systems inventory \+ access

* KPI definitions and target model tasks

* Retention/compliance requirements

### **KPIs**

* Data freshness SLAs

* Quality pass rate (per rule)

* Pipeline failure rate and MTTR

* Cost per GB processed / stored

### **Acceptance criteria**

* Pipelines stable under expected load

* Quality checks enforced and observable

* Reproducible dataset builds

### **Safety**

* Minimization \+ role-based access; audit trails for sensitive access

* Dataset versioning and provenance (poisoning/tampering awareness)

### **Cross-links**

* predictive-analytics, machine-learning, mlops-deployment, integration-services

### **FAQs**

* Do we need a feature store?

* How do you prevent “training-serving skew”?

* How do you design schemas for long-lived AI products?

---

## **3\) `/services/ai/data-labeling-annotation`**

### **Definition**

Operationalize labeling so training data is **consistent, auditable, and improvable**.

### **Best-fit**

* Computer vision, NLP classification/extraction, time-series event labeling

* Need scale \+ QA \+ inter-annotator consistency

### **Deliverables**

* Label taxonomy \+ annotation guidelines

* Golden set creation \+ reviewer workflow

* QA plan (sampling, disagreement resolution)

* Dataset versioning \+ change logs

* Bias/coverage review across key slices (where relevant)

### **Inputs**

* Definition of labels \+ edge cases

* Representative raw data samples

* Privacy constraints (masking/anonymization needs)

### **KPIs**

* Inter-annotator agreement (as appropriate)

* QA pass rate / defect rate

* Turnaround time per batch

* Coverage across critical slices

### **Acceptance criteria**

* Guidelines validated with pilot batch

* QA system running with measurable consistency

* Dataset versions reproducible and traceable

### **Safety**

* Privacy handling for sensitive datasets

* Poisoning/tampering controls (access, approvals, provenance) (aligned with known LLM/AI risks)

### **Cross-links**

* computer-vision, natural-language-processing, machine-learning

### **FAQs**

* How do you avoid label drift over time?

* How do you handle ambiguous cases?

* What’s the minimum dataset size to start?

---

## **4\) `/services/ai/machine-learning`**

### **Definition**

Classical ML systems (tabular/time-series): features, models, evaluation, and production handoff.

### **Best-fit**

* Predictive maintenance, forecasting, anomaly detection, classification, ranking

* Need interpretable models and stable deployment

### **Deliverables**

* Feature engineering \+ baselines

* Model training \+ evaluation report (metrics \+ slices)

* Error analysis \+ iteration plan

* Packaging for serving (API contract, model artifacts)

* Documentation: model spec \+ limitations

### **Inputs**

* Cleaned datasets \+ target definitions

* Operational constraints (latency/cost)

* Business cost function (false positives vs false negatives)

### **KPIs**

* Task-specific metric (AUC/F1/MAE/MAPE/etc.)

* Calibration quality (when needed)

* Latency \+ cost per inference

* Robustness (performance across slices)

### **Acceptance criteria**

* Beats baseline by agreed margin

* Stable on validation \+ key slices

* Ready for deployment (versioned artifacts \+ tests)

### **Safety**

* Monitoring plan defined before production

* Auditability for high-impact decisions (domain-dependent)

### **Cross-links**

* predictive-analytics, mlops-deployment, integration-services, model-optimization

### **FAQs**

* How do you choose metrics that match business impact?

* How do you handle class imbalance and rare failures?

* When is interpretability required?

---

## **5\) `/services/ai/deep-learning`**

### **Definition**

Deep learning for complex signals (vision, sequence/time-series, multimodal), optimized for deployment constraints.

### **Best-fit**

* High-dimensional inputs (images/video, sensor streams)

* Need accuracy gains beyond classical ML

### **Deliverables**

* Architecture selection \+ training pipeline

* Experiment tracking \+ reproducible training

* Evaluation report (including robustness tests)

* Inference packaging \+ optimization plan (quantization/pruning where relevant)

* Deployment readiness checklist

### **Inputs**

* Dataset and labeling strategy

* Hardware constraints (edge/cloud)

* Latency/cost targets

### **KPIs**

* Accuracy \+ robustness metrics

* Inference latency and throughput

* Memory footprint / model size

* Cost per 1k inferences

### **Acceptance criteria**

* Meets accuracy \+ latency targets simultaneously

* Stable across realistic perturbations

* Versioned training \+ reproducible results

### **Safety**

* Model supply chain hygiene (dependencies, artifacts, provenance)

* Monitoring for drift and failure modes

### **Cross-links**

* computer-vision, predictive-analytics, model-optimization, mlops-deployment

### **FAQs**

* When is deep learning worth it vs classical ML?

* How do you prevent regressions across versions?

* How do you deploy DL on constrained hardware?

---

## **6\) `/services/ai/computer-vision`**

### **Definition**

Vision systems: detection, classification, segmentation, inspection, tracking—built for measurable accuracy and operational workflows.

### **Best-fit**

* Industrial inspection, solar site/asset monitoring, safety/compliance, document imaging

### **Deliverables**

* Dataset plan \+ labeling taxonomy

* Model development \+ evaluation (mAP/IoU/F1 etc.)

* Edge/cloud inference design

* Human-in-loop workflow (review queues, confidence thresholds)

* Monitoring for performance drift and camera/environment changes

### **Inputs**

* Camera specs, environments, edge constraints

* Labeling scope and edge cases

* Operational action workflow (what happens after detection)

### **KPIs**

* Precision/recall at operating thresholds

* Latency per frame / throughput

* False alarm rate vs miss rate cost curve

* Performance by environment slice (lighting, weather, camera types)

### **Acceptance criteria**

* Meets target accuracy on critical slices

* Action workflow validated (alerts/review)

* Deployed inference meets latency/cost limits

### **Safety**

* Privacy controls if people/biometrics appear

* Security controls if outputs trigger automated actions

### **Cross-links**

* data-labeling-annotation, deep-learning, mlops-deployment, integration-services

### **FAQs**

* How many images do we need?

* How do you handle changing lighting/weather?

* How do you set confidence thresholds safely?

---

## **7\) `/services/ai/natural-language-processing`**

### **Definition**

NLP for classification, extraction, search/ranking, summarization constraints, and enterprise text pipelines (LLM or non-LLM depending on requirements).

### **Best-fit**

* Ticket triage, entity extraction, document intelligence, semantic search

* Need evaluation rigor and privacy controls

### **Deliverables**

* Task framing \+ label definitions

* Model approach (classical NLP, transformer, or LLM-based with controls)

* Evaluation (quality \+ hallucination checks where relevant)

* Deployment packaging \+ monitoring signals

* Data handling approach (PII/PHI redaction if required)

### **Inputs**

* Document types, languages, domain vocabulary

* Ground truth strategy (labels, QA)

* Risk tolerance for errors/hallucinations

### **KPIs**

* Extraction F1, classification metrics

* Hallucination rate (if generative components)

* Latency \+ cost per document

* Quality by doc type/language slice

### **Acceptance criteria**

* Target metrics met on key slices

* Guardrails for unsafe output defined if generative

* Deployment-ready with monitoring

### **Safety**

* Output handling and validation where outputs feed systems/workflows (OWASP LLM risks if LLMs involved)

### **Cross-links**

* generative-ai, data-engineering, integration-services, mlops-deployment

### **FAQs**

* When do we need LLMs vs smaller NLP models?

* How do you evaluate hallucinations?

* How do you protect sensitive text?

---

## **8\) `/services/ai/generative-ai`**

### **Definition**

Build GenAI features that are **safe, testable, and production-operated**: RAG, tool use, workflow agents, evaluation harnesses, and security controls.

### **Best-fit**

* Knowledge assistants, customer support copilots, internal ops automation

* Need enterprise-grade guardrails and monitoring

### **Deliverables**

* Use-case \+ risk analysis (abuse \+ safety \+ data leakage)

* Architecture: RAG (retrieval \+ grounding), tool calling, caching

* Prompt/tooling design \+ versioning

* Evaluation harness (golden set, regression tests, red team scenarios)

* Guardrails: policy constraints, output validation, refusal behavior

* Monitoring: cost, latency, safety signals, user feedback loops

### **Inputs**

* Knowledge sources, access rules, data retention needs

* Required tool integrations (CRM, ticketing, internal APIs)

* Failure tolerance and escalation plan

### **KPIs**

* Task success rate on golden set

* Hallucination rate / grounding precision

* Security incident rate (prompt injection attempts caught)

* Cost per conversation, latency SLO

### **Acceptance criteria**

* Automated eval suite passes release gates

* Guardrails validated against known LLM risks (prompt injection, insecure output handling, DoS)

* Production monitoring \+ rollback in place

### **Safety**

* Explicit mitigations mapped to OWASP LLM Top 10 categories

* Strong output sanitization if outputs touch downstream systems

### **Cross-links**

* natural-language-processing, integration-services, mlops-deployment, model-optimization

### **FAQs**

* How do you prevent prompt injection and data leakage?

* How do you measure hallucinations reliably?

* When does RAG outperform fine-tuning?

---

## **9\) `/services/ai/predictive-analytics`**

### **Definition**

Forecasting and predictive decision support (time-series, yield, demand, failures), built around business actionability.

### **Best-fit**

* Energy forecasting, asset failure prediction, demand/supply planning

* Need uncertainty awareness and operational triggers

### **Deliverables**

* Forecast models \+ uncertainty bands

* Scenario analysis and what-if tooling

* Dashboards \+ alert triggers tied to operational decisions

* Backtesting report and ongoing recalibration plan

### **Inputs**

* Historical time series \+ covariates (weather, operations, usage)

* Decision workflow (what do you do when forecast changes?)

* Forecast horizon requirements

### **KPIs**

* MAE/MAPE/SMAPE (as appropriate)

* Forecast bias and stability

* Business impact KPI (downtime reduction, yield lift, cost avoidance)

### **Acceptance criteria**

* Backtests meet target accuracy

* Forecasts integrated into decision workflow

* Monitoring for drift/seasonality changes

### **Safety**

* Avoid automation without human oversight in high-impact contexts (domain dependent)

### **Cross-links**

* data-engineering, machine-learning, mlops-deployment, integration-services

### **FAQs**

* How do you include uncertainty in decisions?

* How often do we retrain?

* What data is required for high accuracy?

---

## **10\) `/services/ai/mlops-deployment`**

### **Definition**

Productionize models: CI/CD for ML, registries, automated evaluation gates, scalable serving, and continuous monitoring.

### **Best-fit**

* “We have a model but can’t deploy/maintain it”

* Frequent retraining needs, multi-model environments

* Regulated environments requiring traceability

### **Deliverables**

* Training \+ evaluation pipelines (automated)

* Model registry and versioning standards

* Deployment patterns (batch, real-time, streaming)

* Monitoring: drift, performance, data quality, latency, cost

* Rollback strategy \+ incident runbooks

* Audit-ready logs for model decisions (as required)

### **Inputs**

* Current infra and deployment constraints

* SLOs (latency, uptime) and cost limits

* Compliance/audit requirements

### **KPIs**

* Deployment frequency, lead time, rollback time

* Model performance drift alerts (time-to-detect)

* Serving uptime, p95 latency

* Cost per 1k inferences

### **Acceptance criteria**

* Automated gates prevent regressions

* Monitoring catches drift and failures

* Repeatable deployments with rollback tested

### **Safety**

* Strong supply-chain hygiene and artifact integrity

* Governance alignment to NIST RMF/ISO 42001 concepts

### **Cross-links**

* model-optimization, integration-services, machine-learning, deep-learning

### **FAQs**

* What should trigger retraining?

* How do you measure drift in production?

* How do you prevent “silent model failures”?

---

## **11\) `/services/ai/integration-services`**

### **Definition**

Embed AI into real systems: APIs, event pipelines, enterprise apps, and operational workflows—with reliability and safe fallbacks.

### **Best-fit**

* AI outputs must trigger actions (tickets, controls, alerts, workflows)

* Integrations across IoT/SCADA/ERP/CRM and data platforms

* Need human-in-loop or approval flows

### **Deliverables**

* AI integration architecture (sync/async, event-driven)

* APIs \+ message contracts

* Workflow orchestration (approval gates, escalation)

* Observability for end-to-end “AI → decision → action”

* Safe fallback modes (rule-based fallback, manual review)

### **Inputs**

* Target systems \+ access

* Workflow definitions and responsibility boundaries

* Error tolerance and safety requirements

### **KPIs**

* End-to-end latency from signal → action

* Integration failure rate, retry success

* Action accuracy (precision of automated triggers)

* Operator load (review queue volume)

### **Acceptance criteria**

* Contract tests \+ end-to-end tests pass

* Monitoring covers integration \+ model \+ workflow

* Fallback works under failure conditions

### **Safety**

* If GenAI involved: validate/sanitize outputs before tool execution (OWASP “insecure output handling” risk)

### **Cross-links**

* system-integration (IoT), data-engineering, mlops-deployment, generative-ai

### **FAQs**

* How do you prevent AI from triggering unsafe actions?

* How do you handle schema changes?

* Can we add human approvals for high-risk decisions?

---

## **12\) `/services/ai/model-optimization`**

### **Definition**

Reduce inference cost/latency and improve reliability: quantization, pruning, distillation, batching, caching, and serving architecture tuning.

### **Best-fit**

* Model is too slow/expensive to run at scale

* Need edge deployment or tight latency SLOs

* Need to maintain accuracy while cutting cost

### **Deliverables**

* Performance profiling (CPU/GPU/memory, bottlenecks)

* Optimization plan (quantize/prune/distill as appropriate)

* Serving improvements (batching, caching, concurrency tuning)

* Regression evaluation report (accuracy vs performance trade-offs)

* Deployment-ready optimized artifacts

### **Inputs**

* Target runtime environment (edge/cloud), latency/cost constraints

* Representative inference load patterns

* Acceptable accuracy degradation thresholds (if any)

### **KPIs**

* p95 latency improvement

* Cost reduction per 1k inferences

* Memory footprint reduction

* Throughput increase

* Accuracy retention on critical slices

### **Acceptance criteria**

* Meets target latency/cost with acceptable accuracy retention

* Stability under load (no timeouts/DoS-like behavior)

* Monitoring updated for new model characteristics

### **Safety**

* Ensure optimizations don’t break robustness in critical conditions

* Guard against “optimization regressions” via automated eval gates

### **Cross-links**

* mlops-deployment, deep-learning, computer-vision, generative-ai

### **FAQs**

* How much accuracy do we lose with quantization?

* What’s the best path for edge deployment?

* How do we validate performance under real load?

