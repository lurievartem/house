export const OPEN_CHAT = 'OPEN_CHAT';
export const CLOSE_CHAT = 'CLOSE_CHAT';


export function openChat(){
    return {
        type: OPEN_CHAT
    };
}

export function closeChat(){
    return {
        type: CLOSE_CHAT
    };
}
