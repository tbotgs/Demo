module utils {
    // Dictionary From https://stackoverflow.com/questions/15877362/declare-and-initialize-a-dictionary-in-typescript with a few modification.
    export class Dictionary<TKey, TValue> implements IDictionary<string, TValue>{

        private _keys: string[] = [];
        private _values: TValue[] = [];
        private _count: number = 0;

        get Count(): number {
            return this._count;
        }

        Add(key: string, value: TValue): void {
            this[key] = value; // Create a varaible in this class?
            this._keys.push(key);
            this._values.push(value);
            this._count++;
        }

        Remove(key: string): void {
            let index = this._keys.indexOf(key, 0);
            if (index !== -1) {
                this._keys.splice(index, 1);
                this._values.splice(index, 1);
                delete this[typeof (key)];
                this._count--;
            }
        }

        RemoveAll(): void {
            for (let i = 0; i < this._keys.length; i++) {
                delete this[typeof (this._keys[i])];
                this._count--;
            }
            this._keys.splice(0);
            this._values.splice(0);
        }

        Set(key: string, value: TValue) {
            if (this.ContainsKey(key)) {
                let index = this._keys.indexOf(key, 0);
                this._values[index] = value;
            }
        }

        ContainsKey(key: string): boolean {
            if (typeof this[key] === "undefined") {
                return false;
            }
            return true;
        }

        GetValue(key: string): TValue {
            if (this.ContainsKey(key)) {
                let index = this._keys.indexOf(key, 0);
                return this._values[index];
            }
            return null;
        }

        Keys(): string[] {
            return this._keys;
        }

        Values(): TValue[] {
            return this._values;
        }
    }

    interface IDictionary<TKey, TValue> {
        Add(key: TKey, value: TValue): void;
        Remove(key: TKey): void;
        ContainsKey(key: TKey): boolean;
        Keys(): TKey[];
        Values(): TValue[];
    }
}