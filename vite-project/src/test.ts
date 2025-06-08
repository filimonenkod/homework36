function creareUsers(name: string): string {
    return name;
}

createUsers("Name");

const getDefaultUsername = (name?: string) => {
    if (!name) {
        return "default_name";
    }

    return name;
};

