export const getRandom = (a = 100) => Math.random() * a;
export const hex = (a) => `#${a}`;
export const join = (a) => a.join('');
export const log = a => console.log(a);
export const px  = a => `${a}px`;
export const slice = (a, from = 0, to = 6) => a.slice(from, to);
export const split =  a => a.split('');
export const toString = a => `${a}`;
