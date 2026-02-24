interface Memory {
  userId: string;
  messages: string[];
}

const memoryDB: Memory[] = [];

export const saveMemory = (userId: string, message: string) => {
  let userMemory = memoryDB.find(m => m.userId === userId);

  if (!userMemory) {
    userMemory = { userId, messages: [] };
    memoryDB.push(userMemory);
  }

  userMemory.messages.push(message);
};

export const getMemory = (userId: string): string[] => {
  const userMemory = memoryDB.find(m => m.userId === userId);
  return userMemory ? userMemory.messages : [];
};
