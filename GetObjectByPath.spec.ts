import {getObjectByPath} from "./GetObjectByPath";

const testObject = {
    some: {
        path: {
            three: {
                value: "KOEN"
            },
            ten: {
                levels: {
                    deep: {
                        value: true
                    }
                }
            },
            array: [
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
            ]
        }
    }
};

describe("getObjectByPath", () => {

    it('tests getObjectByPath', () => {
        expect(getObjectByPath(null, '')).toEqual(undefined);
        expect(getObjectByPath({}, '')).toEqual({});
        expect(getObjectByPath(testObject, '')).toEqual(testObject);
        expect(getObjectByPath(testObject, 'some')).toEqual(testObject.some);
        expect(getObjectByPath(testObject, 'some.path.three')).toEqual(testObject.some.path.three);
        expect(getObjectByPath(testObject, 'some.path.three.levels.deep')).toEqual(undefined);
        expect(getObjectByPath(testObject, 'some.path.ten.levels.deep')).toEqual({value: true});
        expect(getObjectByPath(testObject, 'some.path.ten.levels.deep')).toEqual(testObject.some.path.ten.levels.deep);
        expect(getObjectByPath(testObject, 'some.path.ten.levels.deep.value')).toEqual(testObject.some.path.ten.levels.deep.value);
        expect(getObjectByPath(testObject, 'some.path.ten.levels.deep.value')).toEqual(true);
        expect(getObjectByPath(testObject, 'some.path.array')).toEqual(testObject.some.path.array);
        expect(getObjectByPath(testObject, 'some.path.array.0')).toEqual(testObject.some.path.array[0]);
        expect(getObjectByPath(testObject, 'some.path.array.0.id')).toEqual(testObject.some.path.array[0].id);
        expect(getObjectByPath(testObject, 'some.path.array.2.id')).toEqual(testObject.some.path.array[2].id);
    });

});