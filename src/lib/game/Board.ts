export class Board {
    private width: number;
    private height: number;

    constructor(width: number = 5, height: number = 5) {
        this.width = width;
        this.height = height;
    }

    getXY(position: number, doOffsetBy: number): { x: number; y: number } {
        // vakjes -> starten eig op 0
        const index = position - 1;

        const row = Math.floor(index / this.width);
        let col = index % this.width;

        // Omkeer dinges
        if (row % 2 === 1) {
            col = this.width - 1 - col;
        }

        // 600px / 5 = 120
        return {
            x: col * 120 + 60 + doOffsetBy * 15 - 30,
            y: (this.height - 1 - row) * 120 + 80
        };
    }

    isValidPosition(position: number): boolean {
        return position >= 1 && position <= (this.width * this.height);
    }
}