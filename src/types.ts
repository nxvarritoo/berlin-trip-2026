export type ActivityStatus = 'pending' | 'visited' | 'skipped'
export type ItemKind = 'activity' | 'transport'

export interface TripItem {
  id: string; kind: ItemKind; start: string; end?: string; title: string; icon: string
  description: string; address?: string; price?: string; duration?: string; website?: string
  reservation?: string; important?: boolean; coords?: [number, number]
  origin?: string; destination?: string; mode?: string; line?: string; direction?: string
  board?: string; alight?: string; stops?: string; intermediates?: string; transfers?: string
  rideTime?: string; walkBefore?: string; walkAfter?: string; fareZone?: string; alternative?: string
}

export interface TripDay { id: number; date: string; short: string; title: string; subtitle: string; color: string; items: TripItem[] }
export interface ReservationDef { id: string; name: string; date: string; time: string; price: string; website?: string; initial: 'pending'|'booked'|'not-needed'; note?: string }
export interface Expense { id: string; concept: string; category: string; date: string; amount: number; payer: string; notes: string }
export interface ChecklistItem { id: string; text: string; done: boolean; custom?: boolean; phase: 'before'|'during' }
export interface ReservationState { status: 'pending'|'booked'|'not-needed'; code: string; notes: string; attachmentName?: string; attachmentType?: string }
export interface AppState {
  statuses: Record<string, ActivityStatus>; favorites: string[]; notes: Record<string,string>
  reservations: Record<string,ReservationState>; expenses: Expense[]; checklist: ChecklistItem[]; dark: boolean
}
