import { useEffect, useState } from 'react'
import type { AppState, ChecklistItem } from '../types'
import { reservations } from '../data/trip'

const checklist:ChecklistItem[]=[
 ['before-reserve','Reservar actividades pendientes','before'],['before-hours','Confirmar horarios','before'],['before-bvg','Revisar BVG','before'],['before-tickets','Comprobar entradas','before'],['before-luggage','Confirmar consigna de equipaje','before'],
 ['during-transport','Consultar el transporte','during'],['during-tickets','Llevar entradas','during'],['during-souvenirs','Comprar recuerdos','during'],['during-plan','Revisar el planning del día','during']
].map(([id,text,phase])=>({id,text,phase:phase as 'before'|'during',done:false}))

export const initialState:AppState={statuses:{},favorites:[],notes:{},reservations:Object.fromEntries(reservations.map(r=>[r.id,{status:r.initial,code:'',notes:r.note||''}])),expenses:[],checklist,dark:false}
const KEY='berlin-trip-2026-v1'

export function useTripState(){
 const [state,setState]=useState<AppState>(()=>{try{const raw=localStorage.getItem(KEY);if(!raw)return initialState;const p=JSON.parse(raw);return {...initialState,...p,reservations:{...initialState.reservations,...p.reservations}}}catch{return initialState}})
 useEffect(()=>{localStorage.setItem(KEY,JSON.stringify(state));document.documentElement.classList.toggle('dark',state.dark)},[state])
 const patch=(value:Partial<AppState>|((s:AppState)=>AppState))=>setState(s=>typeof value==='function'?value(s):({...s,...value}))
 const reset=()=>{localStorage.removeItem(KEY);setState(initialState)}
 return {state,patch,setState,reset}
}
