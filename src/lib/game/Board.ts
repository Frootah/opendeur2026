export class Board {
    private width: number;
    private height: number;
    private cells: number[][];

    constructor(width: number = 5, height: number = 5) {
        this.width = width;
        this.height = height;
        this.cells = Array(height).fill(null).map(() => Array(width).fill(0));
    }

    getXY(position: number): { x: number; y: number } {
        // vakjes -> starten eig op 0
        const index = position - 1;

        const row = Math.floor(index / this.width);
        let col = index % this.width;

        // Omkeer dinges // ofnee tochnie welke rape is de layout
        if (row % 2 === 1) {
            col = this.width - 1 - col;
        }

        // 600px / 5 = 120
        return {
            x: col * 120 + 60,
            y: (this.height - 1 - row) * 120 + 80
        };
    }

    isValidPosition(position: number): boolean {
        return position >= 0 && position <= (this.width * this.height);
    }
}