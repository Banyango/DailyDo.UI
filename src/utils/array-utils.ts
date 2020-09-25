export class ArrayUtils {
    public static move<T>(array: Array<T>, from: number, to:number) {
        return array.reduce((prev, current, idx, self) => {
            if (from === to) {
                prev.push(current);
            }
            if (idx === from) {
                return prev;
            }
            if (from < to) {
                prev.push(current);
            }
            if (idx === to) {
                prev.push(self[from]);
            }
            if (from > to) {
                prev.push(current);
            }
            return prev;
        }, []);
    }
}