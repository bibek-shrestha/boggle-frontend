export const testValidity = (testValue, letters, visitedNodes, generatedLetters) => {
    if (letters.length > 0) {
        let valid = false;
        const letter = letters.charAt(0);
        const nextValue = generatedLetters.letters.filter(t => t.label === letter);
        for (let k = 0; k < nextValue.length; k++) {
            if (testValue) {
                if (!visitedNodes.some(vn => vn.row === nextValue[k].rPos && vn.col === nextValue[k].cPos) && testRange(testValue.rPos, nextValue[k].rPos)) {
                    if (testRange(testValue.cPos, nextValue[k].cPos)) {
                        valid = testValidity(nextValue[k], letters.slice(1), [...visitedNodes, {
                            row: nextValue[k].rPos,
                            col: nextValue[k].cPos
                        }], generatedLetters);
                    }
                }
            } else {
                valid = testValidity(nextValue[k], letters.slice(1), [...visitedNodes, {
                    row: nextValue[k].rPos,
                    col: nextValue[k].cPos
                }], generatedLetters);
            }
            if (valid) {
                break;
            }
        }
        return valid;
    } else {
        return true;
    }
};

export const testRange = (stableIndex, testIndex) => {
    let inRange = false;
    if (testIndex === stableIndex) {
        inRange = true;
    } else if (testIndex > stableIndex) {
        inRange = stableIndex + 1 === testIndex;
    } else if (testIndex < stableIndex) {
        inRange = stableIndex - 1 === testIndex;
    }
    return inRange;
};
