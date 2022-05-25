import { users, years, totals, prizes, highlights } from "./dataStructures";
import tickers from "mocks/tickers.json";
import gainers from "mocks/gainers.json";
import recents from "mocks/recents.json";
import trendings from "mocks/trendings.json";

export async function getTickers() {
  return tickers;
}

export async function getGainers() {
  return gainers;
}

export async function getRecents() {
  return recents;
}

export async function getTrendings() {
  return trendings;
}

export function getUsers() {
  return users;
}

export function getYears() {
  return years;
}

export function getTotals() {
  return totals;
}

export function getPrizes() {
  return prizes;
}

export function getHighlights() {
  return highlights;
}
