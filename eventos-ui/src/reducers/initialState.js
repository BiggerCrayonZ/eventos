const initialState = {
    events: [
        {
            id: 0,
            name: 'Boda de la Tia',
            tables: 8,
            n_spaces: 10,
            confirm: 20,
            guest: [
                {
                    name: 'Paul Corinto',
                    status: false,
                    n_guest: 2,
                    assign_tables: 1
                },
                {
                    name: 'John Duo',
                    status: false,
                    n_guest: 1,
                    assign_tables: 2
                },
                {
                    name: 'Familia Hernandez',
                    status: false,
                    n_guest: 6,
                    assign_tables: 2
                }
            ]
        },
        {
            id: 1,
            name: 'Reunion de Trabajo',
            tables: 10,
            n_spaces: 14,
            confirm: 48,
            guest: [
                {
                    name: 'Paul Corinto',
                    status: false,
                    n_guest: 2,
                    assign_tables: 1
                },
                {
                    name: 'John Duo',
                    status: false,
                    n_guest: 4,
                    assign_tables: 2
                },
                {
                    name: 'Familia Hernandez',
                    status: false,
                    n_guest: 6,
                    assign_tables: 3
                },
                {
                    name: 'Familia González',
                    status: false,
                    n_guest: 6,
                    assign_tables: 3
                }
            ]
        }
    ],
    ui: {
        isContactFormHidden: true
    }
}

export default initialState;