import { enquiryHandler } from '@/lib/enquiryHandler';
import { tenant } from '@/lib/validators';
import Tenant from '@/lib/models/TenantEnquiry';

export const runtime = 'nodejs';
export const POST = enquiryHandler(tenant, (d, meta) => Tenant.create({
  fullName: d.fullName, email: d.email, phone: d.phone, location: d.location, propertyType: d.propertyType,
  bedrooms: d.bedrooms, budgetGBP: d.budget, moveInDate: d.moveInDate, requirements: d.requirements,
  consentPrivacy: true, consentMarketing: d.consentMarketing, meta }), 'tenant');
