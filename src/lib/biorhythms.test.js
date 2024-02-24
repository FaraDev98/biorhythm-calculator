import { calculateBiorhythms } from "./biorhythms"

it('calculates the physical Biorhythms', () => {
    const biorhythms = calculateBiorhythms('1999-12-31', '2022-12-31');
    expect(biorhythms.physical).toBeCloseTo(0.9977);
})

it('calculates the emotional Biorhythms', () => {
    const biorhythms = calculateBiorhythms('1999-12-31', '2022-12-31');
    expect(biorhythms.emotional).toBeCloseTo(0.2225);
})


it('calculates the intellectual Biorhythms', () => {
    const biorhythms = calculateBiorhythms('1999-12-31', '2022-12-31');
    expect(biorhythms.intellectual).toBeCloseTo(-0.4582);
})