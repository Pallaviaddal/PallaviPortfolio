import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({
  technicalRef,
  careerRef,
  contactRef,
  certificationsRef,
  projectsRef,
  experienceRef,
}) {

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const navigation = [
    { name: 'Technical Skills', ref: technicalRef },
    { name: 'Career Objective', ref: careerRef },
    { name: 'Experience', ref: experienceRef },
    { name: 'Project', ref: projectsRef },
    { name: 'Certifications', ref: certificationsRef },
    { name: 'Contact Us', ref: contactRef },
  ]

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          {/* Mobile button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white">
              <Bars3Icon className="block h-6 w-6 group-data-open:hidden" />
              <XMarkIcon className="hidden h-6 w-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <h1 className="text-xl font-bold text-white">FR Developer</h1>

            {/* Desktop nav */}
            <div className="hidden mx-auto sm:block">
              <div className="flex space-x-3">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.ref)}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="button"
              onClick={() => scrollToSection(item.ref)}
              className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
