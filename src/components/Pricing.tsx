import Link from 'next/link'

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$9.99",
      period: "/month",
      description: "Perfect for small projects and development",
      features: [
        "1 vCPU Core",
        "1GB RAM",
        "25GB SSD Storage",
        "1TB Bandwidth",
        "1 IPv4 Address",
        "Basic Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$19.99",
      period: "/month",
      description: "Ideal for growing applications",
      features: [
        "2 vCPU Cores",
        "4GB RAM",
        "50GB SSD Storage",
        "2TB Bandwidth",
        "1 IPv4 Address",
        "Priority Support",
        "DDoS Protection"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$39.99",
      period: "/month",
      description: "For high-traffic applications",
      features: [
        "4 vCPU Cores",
        "8GB RAM",
        "100GB SSD Storage",
        "4TB Bandwidth",
        "2 IPv4 Addresses",
        "24/7 Phone Support",
        "Advanced DDoS Protection",
        "Managed Backups"
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core features 
            with no hidden fees or setup costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-primary-600 shadow-xl' : 'shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="#signup" 
                className={`w-full block text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                  plan.popular 
                    ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <Link href="#contact" className="btn-secondary">
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  )
}
