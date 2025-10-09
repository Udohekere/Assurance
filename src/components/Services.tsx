import { Shield, Lightbulb, TrendingUp, GraduationCap, CheckCircle, FileCheck, Brain, BookOpen, Award, Target } from 'lucide-react';
import ServicePopover from './ServicePopover';

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive GRC solutions tailored to your organization's needs
          </p>
        </div>

        <div id="advisory" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Advisory Services</h2>
            <p className="text-2xl text-gray-700">Right-sized controls. Measurable trust</p>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Business advisory meeting"
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <Lightbulb className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                Audit Preparation & Support
                <ServicePopover
                  title="Audit Preparation & Support"
                  overview="We help you get audit-ready. No surprises; no gimmicks."
                  howWeWork="We run a pre-assessment, map controls to applicable frameworks, streamline evidence collection, and coach teams through walkthroughs."
                  deliverables="Gap report & roadmap, RACI for control owners, evidence checklist, sample narratives, test matrices, mock auditor Q&A."
                  impact="Fewer findings, shorter audit cycles, clear ownership, lower cost of assurance."
                />
              </h3>
              <p className="text-gray-600">Get audit-ready with expert guidance</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <Shield className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                GRC Strategy & Governance
                <ServicePopover
                  title="GRC Strategy & Governance"
                  overview="Build a right-sized governance model that aligns risk, compliance, and business goals."
                  howWeWork="Define decision rights (RACI), charters, and operating cadence; harmonize frameworks (NIST/ISO/SOC/PCI/HIPAA/CMMC); design KPIs/KRIs and dashboarding."
                  deliverables="GRC operating model, governance charter, unified control catalog, risk appetite statement, reporting pack."
                  impact="Faster, clearer decisions; consistent controls; board-level visibility."
                />
              </h3>
              <p className="text-gray-600">Strategic planning for compliance</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <FileCheck className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                Policy & Procedure Development
                <ServicePopover
                  title="Policy & Procedure Development"
                  overview="Establish clear, auditable, and usable guardrails."
                  howWeWork="Author and harmonize policies, standards, and SOPs; integrate with tooling (e.g., ticketing, evidence vaults); train owners."
                  deliverables="Policy set, standards, SOPs, templates, approval workflow, version control plan."
                  impact="Reduced ambiguity, easier audits, consistent execution across teams."
                />
              </h3>
              <p className="text-gray-600">Build robust governance frameworks</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <Brain className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                AI Risk & Compliance Advisory
                <ServicePopover
                  title="AI Risk & Compliance Advisory"
                  overview="Safely scale AI with compliant, transparent practices."
                  howWeWork="Map use-cases; run AI risk & impact assessments; set guardrails for data, model lifecycle, and human oversight; align to NIST AI RMF / ISO 42001 and privacy regs."
                  deliverables="AI risk register, model governance playbook, DPIA/AIA templates, monitoring & transparency controls."
                  impact="Responsible AI adoption, regulator-ready evidence, and customer trust."
                />
              </h3>
              <p className="text-gray-600">Navigate AI governance landscape</p>
            </div>
          </div>
          <div className="text-center">
            <button onClick={scrollToContact} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg">
              Book a Consultation
            </button>
          </div>
        </div>

        <div id="grc" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Governance, Risk & Compliance Services</h2>
            <p className="text-2xl text-gray-700 mb-6">Managed Risks for Secure Environments</p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We design lean, audit-ready programs that scale with your growth. Whether you're preparing for SOC 2, a FedRAMP ATO, or CMMC Level 2, we align controls to business outcomes, not busywork.
            </p>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
              alt="Risk management and compliance"
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <Target className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                Risk Assessments & Control Implementation
                <ServicePopover
                  title="Risk Assessments & Control Implementation"
                  overview="Prioritize what matters and fix gaps fast. Identify and mitigate risks with frameworks like NIST CSF, RMF, and FAIR."
                  howWeWork="Perform enterprise, IT, and vendor risk assessments; design/enhance controls; embed KRIs; validate effectiveness."
                  deliverables="Risk register with scoring, treatment plans, control designs, test scripts, remediation tracker."
                  impact="Targeted investments, measurable risk reduction, defensible decisions."
                />
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Identify and mitigate risks with frameworks like NIST CSF, RMF, and FAIR.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <CheckCircle className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                Compliance Readiness
                <ServicePopover
                  title="Compliance Readiness"
                  overview="Prepare for certifications/attestations without operational drag. Effectively accomplish audit and certifications for ISO 27001/27701/42001, SOC 1 & 2, PCI DSS, HIPAA, FedRAMP, CMMC."
                  howWeWork="Readiness assessments for SOC 2, ISO 27001/27701/42001, PCI, HIPAA, CMMC; scope reduction; evidence program design."
                  deliverables="Gap analysis & roadmap, control mappings, evidence plan, readiness letter (if applicable)."
                  impact="Faster time-to-badge, fewer re-tests, smoother auditor coordination."
                />
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Audit and certification preparation for:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• ISO 27001/27701/42001</li>
                <li>• SOC 1 & 2</li>
                <li>• PCI DSS</li>
                <li>• HIPAA</li>
                <li>• FedRAMP</li>
                <li>• CMMC</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <FileCheck className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                Internal Audit & SOX Audit Support
                <ServicePopover
                  title="Internal Audit & SOX Audit Support"
                  overview="Strengthen control assurance and ICFR outcomes. Internal Audit and SOX Audit Readiness to drive independent assurance of internal and operational controls without the drag."
                  howWeWork="Risk-based plans, walkthroughs, ITGC/app control testing, issue validation, and management reporting; co-source/augment as needed."
                  deliverables="Audit plan, PBC lists, test scripts & results, deficiency evaluation, remediation plans, executive summaries."
                  impact="Clean opinions reduced repeat findings, tighter close cycles."
                />
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Internal Audit and SOX Audit Readiness to drive independent assurance of internal and operational controls without the drag.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <Shield className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                Governance & Policy Development
                <ServicePopover
                  title="Governance & Policy Development"
                  overview="Stand up practical oversight that scales. Policies, procedures, and governance structures built to last."
                  howWeWork="Establish committees, charters, and escalation paths; integrate governance into product, data, and security lifecycles."
                  deliverables="Governance framework, council/committee charters, decision logs, policy lifecycle & metrics."
                  impact="Predictable oversight, fewer exceptions, aligned stakeholders."
                />
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Policies, procedures, and governance structures built to last.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <Award className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                DOD eMASS Readiness & ATO Support
                <ServicePopover
                  title="DOD eMASS Readiness & ATO Support"
                  overview="Navigate RMF to Authority to Operate with confidence. Get your eMASS system and supporting artifacts ready prior to external validation of your security controls."
                  howWeWork="Scope system boundary; tailor NIST 800-53 controls; author SSP/POA&M; prepare artifacts in eMASS; coordinate assessment; plan continuous monitoring and STIG remediation."
                  deliverables="RMF package (SSP, SAP/SAR inputs, POA&M), eMASS workflows, control evidence, ConMon plan."
                  impact="Clear ATO path, fewer re-work cycles, sustained compliance post-authorization."
                />
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get your eMASS system and supporting artifacts ready prior to external validation of your security controls.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <Brain className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                AI-GRC Advisory
                <ServicePopover
                  title="AI-GRC Advisory"
                  overview="Embed AI governance into your broader GRC program. Align AI adoption with regulatory and ethical requirements."
                  howWeWork="Extend enterprise controls to AI systems (roles, approvals, change mgmt, model inventory, third-party AI risk); align with existing audits and certifications."
                  deliverables="AI control framework mapped to enterprise GRC, model inventory & risk tiers, assurance testing plan, audit-ready evidence model."
                  impact="Cohesive controls, simpler audits, scalable AI adoption."
                />
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Align AI adoption with regulatory and ethical requirements.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all md:col-span-2 lg:col-span-3">
              <Shield className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                Cybersecurity Program Development
                <ServicePopover
                  title="Cybersecurity Program Development"
                  overview="Build or mature a security program that matches your risk and growth. Design, enhance, and operationalize cyber risk management programs."
                  howWeWork="Baseline against NIST CSF/CIS v8; define target state; implement core capabilities (IR, vuln mgmt, logging/monitoring, IAM, secure SDLC); integrate metrics."
                  deliverables="Security roadmap, policies/standards, playbooks (IR/BCP), tooling recommendations, KPI/KRI dashboard."
                  impact="Stronger security posture, quicker detection/response, audit alignment."
                />
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Design, enhance, and operationalize cyber risk management programs.
              </p>
            </div>
          </div>
          <div className="text-center">
            <button onClick={scrollToContact} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg">
              Book a Consultation
            </button>
          </div>
        </div>

        <div id="management" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Management Consulting</h2>
            <p className="text-2xl text-gray-700">Strategic Business Transformation</p>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Management consulting"
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all mb-8">
            <div className="flex items-start mb-6">
              <Award className="text-blue-600 mr-4 flex-shrink-0" size={48} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">GRC Program Design & Implementation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Build and mature enterprise GRC programs with integrated risk, audit, and compliance management frameworks. Develop a governance, risk, and compliance (GRC) program that strengthens decision-making, simplifies audits, and scales with your organization's growth.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Overview</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our GRC Program Design & Implementation service helps organizations establish a structured, business-aligned compliance ecosystem. We design and operationalize frameworks that connect policies, controls, risk assessments, and reporting under a unified governance model — ensuring your compliance activities directly support strategic objectives.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">How we work</h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Assess your current governance and risk maturity against leading frameworks (NIST, ISO, SOC, PCI, HIPAA, CMMC)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Define clear roles, accountability models, and governance committees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Harmonize control frameworks to eliminate redundancy and increase efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Build workflows for issue tracking, audit readiness, and evidence management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Implement dashboards and metrics for real-time visibility into risk and compliance posture</span>
                  </li>
                </ul>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Deliverables</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Comprehensive GRC operating model, control library, risk register, policies and procedures, reporting templates, and a 6–12-month roadmap for continuous improvement.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Impact</h4>
                <p className="text-gray-700 leading-relaxed">
                  Clients achieve faster audits, consistent risk visibility, and a governance structure that turns compliance from a cost center into a strategic enabler of trust, resilience, and business growth.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button onClick={scrollToContact} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg">
              Book a Consultation
            </button>
          </div>
        </div>

        <div id="training" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Training Services</h2>
            <p className="text-2xl text-gray-700">Knowledge for Innovative Spaces</p>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
              alt="Professional training session"
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <GraduationCap className="text-blue-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                Corporate Training
                <ServicePopover
                  title="Corporate Training"
                  overview="Uplevel teams with role-based, hands-on training. Custom workshops for compliance teams, executives, and IT leaders."
                  howWeWork="Customized workshops (leadership, engineers, compliance, product); labs and templates using your stack; live virtual or onsite."
                  deliverables="Slide decks, exercises, checklists, role guides, post-training action plan."
                  impact="Shared vocabulary, faster adoption of controls, higher audit readiness."
                />
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Custom workshops for compliance teams, executives, and IT leaders.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <BookOpen className="text-blue-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                Short Courses
                <ServicePopover
                  title="Short Courses"
                  overview="Hands-on courses delivered in bootcamp style ideal for individuals."
                  howWeWork="Intensive short course on SOC 2 readiness, ISO accelerators, CMMC, FedRAMP/eMASS, AI risk basics."
                  deliverables="Concise workbook, templates, practical checklists, certificate of completion."
                  impact="Quick wins, immediate application, aligned stakeholders."
                />
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Hands-on courses delivered in bootcamp style ideal for individuals.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <Target className="text-blue-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                Self-Paced Learning
                <ServicePopover
                  title="Self-Paced Learning"
                  overview="Learn on your schedule with practical, reusable assets. Recorded courses that you can follow at your own pace."
                  howWeWork="Modular video lessons, downloadable templates, quizzes, and optional coaching add-ons."
                  deliverables="Course portal access, templates & trackers, knowledge checks, office-hours option."
                  impact="Scalable enablement, consistent onboarding, lower training costs."
                />
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Recorded courses that you can follow at your own pace.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-white mb-12 relative">
            <h3 className="text-3xl font-bold mb-8 text-center">Courses</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 relative z-10">
                <Brain className="mb-4" size={40} />
                <h4 className="text-2xl font-bold mb-3 flex items-center">
                  AI-GRC Masterclass
                  <ServicePopover
                    title="AI-GRC Masterclass"
                    overview="The AI-GRC Masterclass is a comprehensive training program that bridges artificial intelligence, governance, risk, and compliance. Participants learn how to design and implement frameworks aligned with NIST AI RMF, ISO 42001, and emerging global AI governance standards."
                    coreAreas={[
                      "AI governance frameworks and accountability models",
                      "Risk assessment methodologies for AI systems",
                      "Compliance alignment across privacy, ethics, and security",
                      "Audit-readiness for AI-driven organizations"
                    ]}
                    deliverables="Workbooks, templates, risk registers, control catalogs, assessment frameworks, and a co-branded Certificate of Completion."
                    impact="Graduates leave with a blueprint to operationalize AI compliance, mitigate risk, and enable innovation with confidence."
                    iconColor="text-red-500"
                  />
                </h4>
                <p className="text-blue-100 leading-relaxed">
                  A 12-session program covering AI governance, compliance frameworks, labs, and certifications.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 relative z-10">
                <TrendingUp className="mb-4" size={40} />
                <h4 className="text-2xl font-bold mb-3 flex items-center">
                  AI-GRC Engineering
                  <ServicePopover
                    title="AI-GRC Engineering"
                    overview="AI-GRC Engineering focuses on the practical implementation of AI risk controls—integrating governance requirements directly into AI development pipelines. This program blends machine learning engineering principles with compliance-by-design methods."
                    coreAreas={[
                      "Model lifecycle management (data lineage, version control, retraining)",
                      "Technical enforcement of governance (RBAC, explainability, bias testing)",
                      "Control automation for monitoring and evidence collection",
                      "Integration with existing GRC platforms and CI/CD pipelines"
                    ]}
                    deliverables="Reference architectures, implementation playbooks, control validation scripts, and deployment templates."
                    impact="Enables organizations to hardwire transparency, accountability, and trust into every AI product release."
                    iconColor="text-red-500"
                  />
                </h4>
                <p className="text-blue-100 leading-relaxed">
                  A 12-session program covering engineering automation and GRC into MLOps process for AI tools and technologies.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 relative z-10">
                <Award className="mb-4" size={40} />
                <h4 className="text-2xl font-bold mb-3 flex items-center">
                  Certification Courses
                  <ServicePopover
                    title="Certification Courses"
                    overview="AssuranceHill's certification courses combine exam mastery with real-world context—bridging what's on the test with how it applies in modern enterprise environments. Whether pursuing Security+, CISSP, CISM, or CGRC, participants gain both the theory and applied skills needed to excel."
                    coreAreas={[
                      "Domain-by-domain exam preparation",
                      "Practical labs and scenario-based exercises",
                      "Governance, risk, and control mapping techniques",
                      "Personalized study roadmaps and performance tracking"
                    ]}
                    deliverables="Instructor-led sessions, live Q&A, practice exams, and certification strategy guides."
                    impact="Builds credentialed cybersecurity leaders ready to drive compliance, manage risk, and lead secure digital transformation initiatives."
                    iconColor="text-red-500"
                  />
                </h4>
                <p className="text-blue-100 leading-relaxed">
                  Professional certification preparation programs.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 relative z-10">
                <Shield className="mb-4" size={40} />
                <h4 className="text-2xl font-bold mb-3 flex items-center">
                  Cybersecurity Risk Management Construct
                  <ServicePopover
                    title="Cybersecurity Risk Management Construct"
                    overview="The Cybersecurity Risk Management Construct course modernizes the traditional RMF process by focusing on agility, automation, and business value. Participants learn how to design, implement, and maintain RMF packages that meet DoD, FedRAMP, and agency requirements—without the paperwork bottlenecks."
                    coreAreas={[
                      "System categorization, control selection, and tailoring",
                      "SSP/POA&M development and eMASS workflows",
                      "Continuous monitoring and control automation",
                      "Integration with DevSecOps and cloud environments"
                    ]}
                    deliverables="RMF toolkit (templates, control libraries, workflow maps), sample ATO package, and continuous monitoring dashboard framework."
                    impact="Streamlines compliance lifecycles, accelerates ATO approvals, and builds a culture of continuous readiness across federal or defense programs."
                    iconColor="text-red-500"
                  />
                </h4>
                <p className="text-blue-100 leading-relaxed">
                  A 12-session program covering FISMA compliance per NIST guidance (formerly RMF).
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-6 text-center">Training Benefits</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Pre-course & post-course assessments</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Hands-on labs with free/open-source GRC tools</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Certificate of completion</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Options for self-paced or live delivery</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button onClick={scrollToContact} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg">
              Register for Training
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
