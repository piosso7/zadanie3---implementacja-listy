class LinkedList {
  size = 0;
  head = null;

  get isEmpty() {
    return tihs.size === 0;
  }

  createNode(element) {
    return { element, next: null };
  }

  //Dodawanie elementu
  push(element) {
    const node = this.createNode(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size += 1;
    return this.size;
  }

  //Umieszczanie elementu w wybreanym miejscu na liście
  insert(element, index = 0) {
    if (index < 0 || index > this.size) return false;

    const node = this.createNode(element);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      node.next = previous.next;
      previous.next = node;
    }
    this.size += 1;
    return true;
  }

  //Wyświetlanie elementu o wybranym indeksie

  getNodeAt(index) {
    if (index === undefined || index < 0 || index >= this.size) return null;

    if (index === 0) return this.head;

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  get(index) {
    const node = this.getNodeAt(index);
    return node ? node.element : null;
  }

  //Kasowanie elementów z listy
  remove(index = 0) {
    if (index < 0 || index > this.size) return null;

    let removedNode = this.head;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let previous = this.getNodeAt(index - 1);
      removedNode = previous.next;
      previous.next = removedNode.next;
    }
    this.size -= 1;
    return removedNode.element;
  }

  //Zamiana wygenerowanej listy na tekst
  toString() {
    if (!this.size) return "";

    let str = `${this.head.element}`;
    let current = this.head;

    for (let i = 1; i < this.size; i++) {
      current = current.next;
      str += `,${current.element}`;
    }
    return str;
  }

  //Umieszczanie listy w tablicy
  print() {
    let arr = [];

    if (this.size) {
      let current = this.head;

      for (let i = 0; i < this.size; i++) {
        arr.push(current);
        current = current.next;
      }
    }
    console.log(arr);
  }
}

const list = new LinkedList();

list.push(12); //dodawanie do listy
list.push(14); //dodawanie do listy
list.push(20); //dodawanie do listy
list.push(50); //dodawanie do listy

list.print();

list.insert(100); //umieszczanie na początku
list.insert(200, 2); // umieszczanie na miejscu z indexem 2
list.insert(300, list.size); // umieszczanie na końcu

list.print();

console.log(list.get(0)); // wyświetlanie elementu z indexem 0
console.log(list.get(3)); // wyświetlanie elementu z indexem 3
console.log(list.get(list.size - 1)); // wyświetlanie ostatniego elementu listy

list.remove(0); //kasowanie elementu z indexem 0
list.print();
list.remove(3); //kasowanie elementu z indexem 3
list.print();
list.remove(list.size - 1); //kasowanie ostatniego elementu

list.print();
