const cycleDetection = (head) => {
  let currentNode = head;
  const seenNodes = new Set();

  while (!seenNodes.has(currentNode)) {
    if (currentNode.next === null) {
      return false;
    }
    seenNodes.add(currentNode);
    currentNode = currentNode.next;
  }
  return true;
};

/* Floyd's Tortoise and Hare Algorithm */
const cycleDetection2 = (head) => {
  let tort = head,
    hare = head;

  while (true) {
    if (hare === null || hare.next === null) {
      return false;
    } else {
      hare = hare.next;
    }
    tort = tort.next;
    hare = hare.next;
    if (tort === hare) break;
  }
  const meetingNode = findCycleStart(head, hare);
  return true, meetingNode;
};

const findCycleStart = (head, hare) => {
  let p1 = head,
    p2 = hare;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
};
