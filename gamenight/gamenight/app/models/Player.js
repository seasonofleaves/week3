export class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.score = 0;
  }
  get PlayerTemplateCard() {
    return `
    <div class="card">
      <div class="card-body">
        ${this.name} - ${this.score}
      </div>
      <button
    </div>`
  }
}
