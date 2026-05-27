export class Player {
    id: string;
    name: string;
    color: string;
    position: number = $state(1);  // ← add $state

    constructor(id: string, name: string, color: string, position: number = 1) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.position = position;
    }

    moveTo(position: number): void {
        this.position = position;
    }
}