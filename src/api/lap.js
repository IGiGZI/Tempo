import { request } from "./client";

export function getLaps(timeMarkID){
  return request(`/laps/${timeMarkID}`)
}

export function createLap(payload){
  return request("/laps",{
    method: "POST",
    body: JSON.stringify(payload),
  })
}