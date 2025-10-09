import { Shield, Lightbulb, TrendingUp, GraduationCap, CheckCircle, FileCheck, Brain, BookOpen, Award, Target } from 'lucide-react';

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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Audit Preparation & Support</h3>
              <p className="text-gray-600">Get audit-ready with expert guidance</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <Shield className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">GRC Strategy & Governance</h3>
              <p className="text-gray-600">Strategic planning for compliance</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <FileCheck className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Policy & Procedure Development</h3>
              <p className="text-gray-600">Build robust governance frameworks</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <Brain className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Risk & Compliance Advisory</h3>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Assessments & Control Implementation</h3>
              <p className="text-gray-600 leading-relaxed">
                Identify and mitigate risks with frameworks like NIST CSF, RMF, and FAIR.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <CheckCircle className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Readiness</h3>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Internal Audit & SOX Audit Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Internal Audit and SOX Audit Readiness to drive independent assurance of internal and operational controls without the drag.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <Shield className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Governance & Policy Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Policies, procedures, and governance structures built to last.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <Award className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">DOD eMASS Readiness & ATO Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your eMASS system and supporting artifacts ready prior to external validation of your security controls.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <Brain className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-GRC Advisory</h3>
              <p className="text-gray-600 leading-relaxed">
                Align AI adoption with regulatory and ethical requirements.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all md:col-span-2 lg:col-span-3">
              <Shield className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cybersecurity Program Development</h3>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Corporate Training</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom workshops for compliance teams, executives, and IT leaders.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <BookOpen className="text-blue-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Short Courses</h3>
              <p className="text-gray-600 leading-relaxed">
                Hands-on courses delivered in bootcamp style ideal for individuals.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <Target className="text-blue-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Self-Paced</h3>
              <p className="text-gray-600 leading-relaxed">
                Recorded courses that you can follow at your own pace.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-white mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Courses</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Brain className="mb-4" size={40} />
                <h4 className="text-2xl font-bold mb-3">AI-GRC Masterclass</h4>
                <p className="text-blue-100 leading-relaxed">
                  A 12-session program covering AI governance, compliance frameworks, labs, and certifications.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <TrendingUp className="mb-4" size={40} />
                <h4 className="text-2xl font-bold mb-3">AI-GRC Engineering</h4>
                <p className="text-blue-100 leading-relaxed">
                  A 12-session program covering engineering automation and GRC into MLOps process for AI tools and technologies.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Award className="mb-4" size={40} />
                <h4 className="text-2xl font-bold mb-3">Certification Courses</h4>
                <p className="text-blue-100 leading-relaxed">
                  Professional certification preparation programs.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Shield className="mb-4" size={40} />
                <h4 className="text-2xl font-bold mb-3">Cybersecurity Risk Management Construct</h4>
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
