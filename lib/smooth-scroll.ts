export function smoothScrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (!element) return

  const emergencyBarHeight = 48 // 3rem = 48px
  const navbarHeight = 64 // 4rem = 64px
  const additionalPadding = 24 // Extra spacing for comfort
  const totalOffset = emergencyBarHeight + navbarHeight + additionalPadding

  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - totalOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  })
}
