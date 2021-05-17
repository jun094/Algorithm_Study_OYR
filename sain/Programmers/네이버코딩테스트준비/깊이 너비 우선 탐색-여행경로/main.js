console.log("main.js");
// https://taesung1993.tistory.com/66

function solution(tickets) {
  let answer = [];

  function findRoute(airport, tickets, path) {
    const newPath = [...path, airport];
    if (tickets.length < 1) answer.push(newPath);
    else {
      for (let i = 0; i < tickets.length; i++) {
        const currentTicket = tickets[i];
        const [currentFrom, nextTo] = currentTicket;
        if (currentFrom === airport) {
          const restTickets = [...tickets];
          restTickets.splice(i, 1);
          findRoute(nextTo, restTickets, newPath);
        }
      }
    }
  }

  findRoute("ICN", tickets, []);
  return answer.sort()[0];
}

const tickets1 = [
  ["ICN", "JFK"],
  ["HND", "IAD"],
  ["JFK", "HND"],
];

const tickets2 = [
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
];

const tickets3 = [
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ICN"],
];

console.log(solution(tickets2));
