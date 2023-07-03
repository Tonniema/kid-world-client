// import React from 'react';



import ClassManagement from './Admin/ClassManagement/ClassManagement';

import useAdmin from '../../../Hooks/useAdmin';
import AddClass from './Instructor/AddClass/AddClass';
import useIsInstructor from '../../../Hooks/useIsInstructor';
import SelectedClasses from './User/selectedClasses/selectedClasses';


const Common_Dashboard = () => {
    const [isInstructor] = useIsInstructor();
    const [isAdmin] = useAdmin();
    
    let content;

    if (isAdmin) {
        content = <section>
            <ClassManagement></ClassManagement>
        </section>;
    } else if (isInstructor) {
        content = <section>
            <AddClass></AddClass>
        </section>;
    } else {
        content = <section>
           <SelectedClasses></SelectedClasses>
        
        </section>;
    }

    return (
        <section>
            {content}
        </section>
    );
};


export default Common_Dashboard;