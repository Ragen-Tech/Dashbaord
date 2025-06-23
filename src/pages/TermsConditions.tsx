import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Shield, AlertTriangle, Users, BookOpen, ScrollText, Gavel, Handshake, Globe, Scale, Lightbulb, LinkIcon, Flag } from 'lucide-react';

const TermsConditions = () => {
  const definitions = [
    { term: 'Affiliate', description: 'means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.' },
    { term: 'Country', description: 'refers to: Sri Lanka' },
    { term: 'Company', description: ' (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Ragentech Systems Pvt Ltd, No. 32 Hillcrest Avenue, Mount Lavinia, Colombo 10370, Sri Lanka.' },
    { term: 'Device', description: 'means any device that can access the Service such as a computer, a cellphone or a digital tablet.' },
    { term: 'Service', description: 'refers to the Website.' },
    { term: 'Terms and Conditions', description: ' (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.' },
    { term: 'Third-party Social Media Service', description: 'means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.' },
    { term: 'Website', description: 'refers to Ragentech, accessible from https://ragentech.com/' },
    { term: 'You', description: 'means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.' },
  ];

  const sections = [
    {
      title: 'Acknowledgment',
      icon: BookOpen,
      content: [
        {
          type: 'paragraph',
          text: 'These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.'
        },
        {
          type: 'paragraph',
          text: 'Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.'
        },
        {
          type: 'paragraph',
          text: 'By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.'
        },
        {
          type: 'paragraph',
          text: 'You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.'
        },
        {
          type: 'paragraph',
          text: 'Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.'
        }
      ]
    },
    {
      title: 'Links to Other Websites',
      icon: LinkIcon,
      content: [
        {
          type: 'paragraph',
          text: 'Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.'
        },
        {
          type: 'paragraph',
          text: 'The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.'
        },
        {
          type: 'paragraph',
          text: 'We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.'
        }
      ]
    },
    {
      title: 'Termination',
      icon: AlertTriangle,
      content: [
        {
          type: 'paragraph',
          text: 'We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.'
        },
        {
          type: 'paragraph',
          text: 'Upon termination, Your right to use the Service will cease immediately.'
        }
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: Scale,
      content: [
        {
          type: 'paragraph',
          text: 'Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven\'t purchased anything through the Service.'
        },
        {
          type: 'paragraph',
          text: 'To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.'
        },
        {
          type: 'paragraph',
          text: 'Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party\'s liability will be limited to the greatest extent permitted by law.'
        }
      ]
    },
    {
      title: '"AS IS" and "AS AVAILABLE" Disclaimer',
      icon: Lightbulb,
      content: [
        {
          type: 'paragraph',
          text: 'The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.'
        },
        {
          type: 'paragraph',
          text: 'Without limiting the foregoing, neither the Company nor any of the company\'s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.'
        },
        {
          type: 'paragraph',
          text: 'Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.'
        }
      ]
    },
    {
      title: 'Governing Law',
      icon: Gavel,
      content: [
        {
          type: 'paragraph',
          text: 'The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.'
        }
      ]
    },
    {
      title: 'Disputes Resolution',
      icon: Handshake,
      content: [
        {
          type: 'paragraph',
          text: 'If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.'
        }
      ]
    },
    {
      title: 'For European Union (EU) Users',
      icon: Globe,
      content: [
        {
          type: 'paragraph',
          text: 'If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.'
        }
      ]
    },
    {
      title: 'United States Legal Compliance',
      icon: Flag,
      content: [
        {
          type: 'paragraph',
          text: 'You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.'
        }
      ]
    },
    {
      title: 'Severability and Waiver',
      icon: ScrollText,
      content: [
        {
          type: 'sub-heading',
          text: 'Severability'
        },
        {
          type: 'paragraph',
          text: 'If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.'
        },
        {
          type: 'sub-heading',
          text: 'Waiver'
        },
        {
          type: 'paragraph',
          text: 'Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party\'s ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.'
        }
      ]
    },
    {
      title: 'Translation Interpretation',
      icon: Users,
      content: [
        {
          type: 'paragraph',
          text: 'These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.'
        }
      ]
    },
    {
      title: 'Changes to These Terms and Conditions',
      icon: FileText,
      content: [
        {
          type: 'paragraph',
          text: 'We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days\' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.'
        },
        {
          type: 'paragraph',
          text: 'By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.'
        }
      ]
    },
    {
      title: 'Contact Us',
      icon: Shield,
      content: [
        {
          type: 'paragraph',
          text: 'If you have any questions about these Terms and Conditions, You can contact us:',
          list: [
            'By email: hello@ragentech.com',
            'By visiting this page on our website: https://ragentech.com/',
            'By phone number: 0768439520'
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 mt-2">
            Last updated: June 17, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 mb-8">
            <p className="text-gray-300 leading-relaxed">
              Please read these terms and conditions carefully before using Our Service.
            </p>
          </div>

          {/* Interpretation and Definitions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-500">
                  <FileText className="h-6 w-6 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-white">Interpretation and Definitions</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
              <h3 className="text-xl font-bold text-white mb-4">Definitions</h3>
              <ul className="space-y-3">
                {definitions.map((def, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 leading-relaxed"><strong>{def.term}</strong> {def.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Dynamic Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              className="mb-8"
            >
              <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-500">
                    <section.icon className="h-6 w-6 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {item.type === 'paragraph' && (
                      <>
                        <p className="text-gray-300 leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: item.text }}></p>
                        {item.list && ( // Added this block to render the list
                          <ul className="space-y-2 ml-4 mb-4">
                            {item.list.map((listItem, liIndex) => (
                              <li key={liIndex} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: listItem }}></span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                    {item.type === 'sub-heading' && (
                      <h4 className="text-lg font-semibold text-white mt-4 mb-2">{item.text}</h4>
                    )}
                    {/* The original 'list' type handling was commented out/removed, but if you intended to have a separate 'list' type, you'd need to re-add it or keep it as part of 'paragraph' as fixed here. */}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;