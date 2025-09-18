const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3001'

// Generic fetch function for Payload API with timeout
async function fetchFromPayload(endpoint: string) {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    const response = await fetch(`${PAYLOAD_API_URL}/api${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      console.warn(`Failed to fetch from ${endpoint}. Status: ${response.status}`)
      return { docs: [] }
    }

    return response.json()
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error)
    return { docs: [] }
  }
}

// Enhanced media URL helper with fallback
export function getMediaUrl(media: any): string {
  if (!media) return ''
  
  try {
    // If media is a string (URL), return as is
    if (typeof media === 'string') {
      if (media.startsWith('http')) return media
      return `${PAYLOAD_API_URL}${media}`
    }
    
    // If media is an object with url property
    if (media.url) {
      if (media.url.startsWith('http')) return media.url
      return `${PAYLOAD_API_URL}${media.url}`
    }
    
    // If media has filename, construct URL
    if (media.filename) {
      return `${PAYLOAD_API_URL}/api/media/file/${media.filename}`
    }
    
    return ''
  } catch (error) {
    console.error('Error processing media URL:', error)
    return ''
  }
}

// Hero data
export async function getHeroData() {
  const data = await fetchFromPayload('/hero?where[isActive][equals]=true&limit=1')
  return data?.docs?.[0] || null
}

// Programs data
export async function getProgramsData() {
  const data = await fetchFromPayload('/programs?where[isActive][equals]=true&sort=order')
  return data?.docs || []
}

// Headlines data
export async function getFeaturedHeadlines(limit = 3) {
  const data = await fetchFromPayload(`/headlines?where[isFeatured][equals]=true&where[isActive][equals]=true&limit=${limit}&sort=-publishedDate`)
  return data?.docs || []
}

export async function getAllHeadlines() {
  const data = await fetchFromPayload('/headlines?where[isActive][equals]=true&sort=-publishedDate')
  return data?.docs || []
}

export async function getHeadlineBySlug(slug: string) {
  const data = await fetchFromPayload(`/headlines?where[slug][equals]=${slug}&where[isActive][equals]=true&limit=1`)
  return data?.docs?.[0] || null
}

// Research data
export async function getFeaturedResearch(limit = 3) {
  const data = await fetchFromPayload(`/research?where[isFeatured][equals]=true&where[isActive][equals]=true&limit=${limit}&sort=-publishedDate`)
  return data?.docs || []
}

export async function getAllResearch() {
  const data = await fetchFromPayload('/research?where[isActive][equals]=true&sort=-publishedDate')
  return data?.docs || []
}

export async function getResearchBySlug(slug: string) {
  const data = await fetchFromPayload(`/research?where[slug][equals]=${slug}&where[isActive][equals]=true&limit=1`)
  return data?.docs?.[0] || null
}

export async function getResearchByCategory(category: string) {
  const data = await fetchFromPayload(`/research?where[category][equals]=${category}&where[isActive][equals]=true&sort=-publishedDate`)
  return data?.docs || []
}

// Events data - ADD THESE FUNCTIONS
export async function getUpcomingEvents() {
  const data = await fetchFromPayload('/events?where[isUpcoming][equals]=true&where[isActive][equals]=true&sort=eventDate')
  return data?.docs || []
}

export async function getAllEvents() {
  const data = await fetchFromPayload('/events?where[isActive][equals]=true&sort=-eventDate')
  return data?.docs || []
}

export async function getEventBySlug(slug: string) {
  const data = await fetchFromPayload(`/events?where[slug][equals]=${slug}&where[isActive][equals]=true&limit=1`)
  return data?.docs?.[0] || null
}

export async function getFeaturedEvents(limit = 3) {
  const data = await fetchFromPayload(`/events?where[isFeatured][equals]=true&where[isActive][equals]=true&limit=${limit}&sort=eventDate`)
  return data?.docs || []
}

export async function getEventsByType(eventType: string) {
  const data = await fetchFromPayload(`/events?where[eventType][equals]=${eventType}&where[isActive][equals]=true&sort=eventDate`)
  return data?.docs || []
}

// Student Activities data
export async function getStudentActivities() {
  const data = await fetchFromPayload('/student-activities?where[isActive][equals]=true&sort=-activityDate')
  return data?.docs || []
}

export async function getFeaturedStudentActivities(limit = 3) {
  const data = await fetchFromPayload(`/student-activities?where[isFeatured][equals]=true&where[isActive][equals]=true&limit=${limit}&sort=-activityDate`)
  return data?.docs || []
}

export async function getStudentActivityBySlug(slug: string) {
  const data = await fetchFromPayload(`/student-activities?where[slug][equals]=${slug}&where[isActive][equals]=true&limit=1`)
  return data?.docs?.[0] || null
}

export async function getStudentActivitiesByCategory(category: string) {
  const data = await fetchFromPayload(`/student-activities?where[category][equals]=${category}&where[isActive][equals]=true&sort=-activityDate`)
  return data?.docs || []
}

// Lecturer Activities data
export async function getLecturerActivities() {
  const data = await fetchFromPayload('/lecturer-activities?where[isActive][equals]=true&sort=-activityDate')
  return data?.docs || []
}

export async function getFeaturedLecturerActivities(limit = 3) {
  const data = await fetchFromPayload(`/lecturer-activities?where[isFeatured][equals]=true&where[isActive][equals]=true&limit=${limit}&sort=-activityDate`)
  return data?.docs || []
}

export async function getLecturerActivityBySlug(slug: string) {
  const data = await fetchFromPayload(`/lecturer-activities?where[slug][equals]=${slug}&where[isActive][equals]=true&limit=1`)
  return data?.docs?.[0] || null
}

export async function getLecturerActivitiesByCategory(category: string) {
  const data = await fetchFromPayload(`/lecturer-activities?where[category][equals]=${category}&where[isActive][equals]=true&sort=-activityDate`)
  return data?.docs || []
}

// Alumni Activities data
export async function getAlumniActivities() {
  const data = await fetchFromPayload('/alumni-activities?where[isActive][equals]=true&sort=-activityDate')
  return data?.docs || []
}

export async function getFeaturedAlumniActivities(limit = 3) {
  const data = await fetchFromPayload(`/alumni-activities?where[isFeatured][equals]=true&where[isActive][equals]=true&limit=${limit}&sort=-activityDate`)
  return data?.docs || []
}

export async function getAlumniActivityBySlug(slug: string) {
  const data = await fetchFromPayload(`/alumni-activities?where[slug][equals]=${slug}&where[isActive][equals]=true&limit=1`)
  return data?.docs?.[0] || null
}

export async function getAlumniActivitiesByCategory(category: string) {
  const data = await fetchFromPayload(`/alumni-activities?where[category][equals]=${category}&where[isActive][equals]=true&sort=-activityDate`)
  return data?.docs || []
}


// TAMBAHAN HANIN - TENTATIVE FUNCTIONS
// Academic Programs data
export async function getAcademicProgramsData() {
  const data = await fetchFromPayload('/academic-programs?where[isActive][equals]=true')
  return data?.docs || []
}

// Programs data
export async function getAcademicProgramLandingData() {
  const data = await fetchFromPayload('/academic-program-landing?where[isActive][equals]=true')
  return data?.docs || []
}



// Helper function to check if media exists
export async function checkMediaExists(mediaUrl: string): Promise<boolean> {
  try {
    const response = await fetch(mediaUrl, { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}