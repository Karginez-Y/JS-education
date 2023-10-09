'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
];

// try {
//     data.forEach((blockObj, i) => {
//         const block = document.createElement(blockObj.tag);
    
//         if (!blockObj.id) throw new Error(`there is no ID in object #${i + 1}`);
    
//         block.setAttribute('id', blockObj.id);
//         document.body.append(block);
//     });
// } catch(e) {
//     console.log(e.name);
//     console.log(e.message);
//     console.log(e.stack);
// }

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
    
        if (!blockObj.id) throw new SyntaxError(`there is no ID in object #${i + 1}`);
    
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch(e) {
    if (e.name === 'SyntaxError') {
        console.log(e.message);
    } else throw e; // если ошибка предвиденная показать сообщение(код продолжит выполнятся) если непредвиденная выбросит ошибку
}

// const err = new Error('error');
// console.log(err.name, err.message, err.stack);