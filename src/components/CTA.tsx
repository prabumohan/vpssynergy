import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Join thousands of satisfied customers who trust VPS Synergy for their hosting needs. 
          Deploy your VPS in under 60 seconds and experience the difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#signup" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
            Start Free Trial
          </Link>
          <Link href="#contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
            Contact Sales
          </Link>
        </div>
        <p className="text-primary-100 text-sm mt-6">
          No credit card required • 30-day money-back guarantee • Cancel anytime
        </p>
      </div>
    </section>
  )
}
