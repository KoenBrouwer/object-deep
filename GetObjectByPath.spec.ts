import objectDeep from "./index";

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
        expect(objectDeep(null, '')).toEqual(undefined);
        expect(objectDeep({}, '')).toEqual({});
        expect(objectDeep(testObject, '')).toEqual(testObject);
        expect(objectDeep(testObject, 'some')).toEqual(testObject.some);
        expect(objectDeep(testObject, 'some.path.three')).toEqual(testObject.some.path.three);
        expect(objectDeep(testObject, 'some.path.three.levels.deep')).toEqual(undefined);
        expect(objectDeep(testObject, 'some.path.ten.levels.deep')).toEqual({value: true});
        expect(objectDeep(testObject, 'some.path.ten.levels.deep')).toEqual(testObject.some.path.ten.levels.deep);
        expect(objectDeep(testObject, 'some.path.ten.levels.deep.value')).toEqual(testObject.some.path.ten.levels.deep.value);
        expect(objectDeep(testObject, 'some.path.ten.levels.deep.value')).toEqual(true);
        expect(objectDeep(testObject, 'some.path.array')).toEqual(testObject.some.path.array);
        expect(objectDeep(testObject, 'some.path.array.0')).toEqual(testObject.some.path.array[0]);
        expect(objectDeep(testObject, 'some.path.array.0.id')).toEqual(testObject.some.path.array[0].id);
        expect(objectDeep(testObject, 'some.path.array.2.id')).toEqual(testObject.some.path.array[2].id);
    });

});