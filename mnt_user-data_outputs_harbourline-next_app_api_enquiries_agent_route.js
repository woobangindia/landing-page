import { enquiryHandler } from '@/lib/enquiryHandler';
import { agent } from '@/lib/validators';
import Agent from '@/lib/models/AgentEnquiry';

export const runtime = 'nodejs';
export const POST = enquiryHandler(agent, (d, meta) => Agent.create({
  fullName: d.fullName, agencyName: d.agencyName, email: d.email, phone: d.phone, website: d.website,
  location: d.location, agentType: d.agentType, areasCovered: d.areasCovered, info: d.info,
  consentPrivacy: true, consentMarketing: d.consentMarketing, meta }), 'agent');
