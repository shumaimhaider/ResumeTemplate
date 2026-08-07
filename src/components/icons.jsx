import {
  FaEnvelope,
  FaMobileAlt,
  FaMapMarkedAlt,
  FaGlobe,
  FaLinkedinIn,
  FaMediumM,
  FaGithub,
} from 'react-icons/fa'

export const CONTACT_ICONS = {
  email: FaEnvelope,
  phone: FaMobileAlt,
  location: FaMapMarkedAlt,
  website: FaGlobe,
  linkedin: FaLinkedinIn,
  medium: FaMediumM,
  github: FaGithub,
}

// icons that render as a filled, colored square badge instead of a plain outline glyph
export const BADGE_ICONS = new Set(['linkedin', 'medium', 'github'])
