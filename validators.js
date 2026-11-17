import { z } from 'zod';
const blank = (s) => z.preprocess((v) => (v === '' || v == null ? undefined : v), s.optional());
const text = (min, max, label) => z.string().trim().min(min, `${label} is required`).max(max, `${label} is too long`);
const phone = z.string().trim().regex(/^\+?[0-9][0-9\s().-]{6,19}$/, 'Enter a valid UK or international phone number');
const UK_PC = /\b([A-Z]{1,2}\d[A-Z\d]?)\s*(\d[A-Z]{2})\b/gi;
const normalisePostcodes = (s) => s.replace(UK_PC, (_, a, b) => `${a} ${b}`.toUpperCase());

const parseUKDate = (s) => {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(s);
  if (!m) return null;
  const d = new Date(Date.UTC(+m[3], +m[2] - 1, +m[1]));
  return d.getUTCDate() === +m[1] && d.getUTCMonth() === +m[2] - 1 ? d : null;
};

const base = {
  consentPrivacy: z.literal(true, { errorMap: () => ({ message: 'You must accept the Privacy Policy' }) }),
  consentMarketing: z.boolean().optional().default(false),
  company_url: z.string().max(0).optional(), // honeypot
  startedAt: z.number().optional(),          // time-trap
};

const tenant = z.object({
  fullName: text(2, 100, 'Full name'),
  email: z.string().trim().toLowerCase().email('Enter a valid email address').max(160),
  phone,
  location: text(2, 120, 'Preferred location').transform(normalisePostcodes),
  propertyType: blank(z.enum(['Apartment', 'Flat', 'House', 'Studio', 'Other'])),
  bedrooms: blank(z.enum(['Studio', '1', '2', '3', '4', '5+'])),
  budget: blank(z.coerce.number().min(0).max(100000, 'Enter a realistic monthly budget')),
  moveInDate: blank(z.string().refine((v) => parseUKDate(v), 'Use the format DD/MM/YYYY').transform(parseUKDate)),
  requirements: blank(z.string().trim().max(1500)),
  ...base,
});

const agent = z.object({
  fullName: text(2, 100, 'Full name'),
  agencyName: text(2, 120, 'Agency name'),
  email: z.string().trim().toLowerCase().email('Enter a valid business email').max(160),
  phone,
  website: blank(z.string().trim().max(200).regex(/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i, 'Enter a valid website address')),
  location: text(2, 120, 'Business location').transform(normalisePostcodes),
  agentType: blank(z.enum(['Estate Agent', 'Letting Agent', 'Property Manager', 'Developer', 'Other'])),
  areasCovered: blank(z.string().trim().max(500)),
  info: blank(z.string().trim().max(1500)),
  ...base,
});

export { tenant, agent, parseUKDate };
