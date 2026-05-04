import { defineCollection, z } from 'astro:content';

const leverSchema = z.object({
  name: z.string(),
  tag: z.string(),
  type: z.enum(['smiley', 'morales', 'both', 'none']),
});

const frameSchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string(),
  evidence: z.string(),
  smiley_position: z.string().optional(),
  smiley_actions: z.array(z.string()).optional(),
  morales_position: z.string().optional(),
  morales_actions: z.array(z.string()).optional(),
  evidence_gap: z.string().optional(),
});

const issues = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    title_es: z.string().optional(),
    summary: z.string(),
    summary_es: z.string().optional(),
    order: z.number().optional(),
    updated: z.string().optional(),
    salience: z.enum(['high', 'medium', 'structural']).optional(),
    stat: z.string().optional(),
    stat_type: z.enum(['danger', 'warning', 'success']).optional(),
    levers: z.array(leverSchema).optional(),
    context: z.string().optional(),
    frames: z.array(frameSchema).optional(),
    smiley: z.object({
      position: z.string().optional(),
      actions: z.array(z.string()).optional(),
      args_for: z.array(z.string()).optional(),
      args_against: z.array(z.string()).optional(),
    }).optional(),
    morales: z.object({
      position: z.string().optional(),
      actions: z.array(z.string()).optional(),
      args_for: z.array(z.string()).optional(),
      args_against: z.array(z.string()).optional(),
    }).optional(),
    sources: z.array(z.object({
      label: z.string(),
      url: z.string().optional(),
    })).optional(),
  }),
});

export const collections = { issues };
