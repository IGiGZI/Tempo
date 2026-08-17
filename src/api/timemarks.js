import { request } from "./client";

export function getTimeMarks() {
  return request("/timemarks");
}

export function createTimeMark(payload) {
  // payload example: { label: "Lap 1", elapsedTime: 12345, note: "..." }
  return request("/timemarks", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function deleteTimeMark(id) {
  return request(`/timemarks/${id}`, {
    method: "DELETE",
  });
}