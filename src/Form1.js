import React from "react";
import { useState } from "react"; 
import { Row, Col, Input, DatePicker, Table, Button } from 'antd';
import './Form1.css';


const Form1 = () => {

    const [InputValue1 , SetInputValue1] = useState('');
    const [InputValue2 , SetInputValue2] = useState('');
    const [InputValue3 , SetInputValue3] = useState('');

    const handleinputvalue1 = (e) =>
    {
        SetInputValue1(e.target.value);
    };

    const handleinputvalue2 = (e) =>
    {
        SetInputValue2(e.target.value);
    };

    const handleinputvalue3 = (e) =>
    {
        SetInputValue3(e.target.value);
    }

    //Table content//

    const columns = [
        {
            title: 'AUTHORIZATION',
            dataIndex: 'col1',
            key: 'col1',
        },
        {
            title: 'SIGNATURE',
            dataIndex: 'col2',
            key: 'col2',
        },
        
        {
            title: 'DATE',
            dataIndex: 'col3',
            key: 'col3',
        },
    ];
    
    const data = [
        { key: '1', col1: 'HI', col2: '', col3: 'RR' },
        { key: '2', col1: 'DR', col2: '', col3: 'TY' },
    ];
    
   
return (
<div className="main">
    <Row>
    <Col span={24} className="h1-content">
    <h2>
    CONDITIONS OF OCCUPANCY FOR MILITARY FAMILY HOUSING
    </h2>
    </Col>
    </Row>

    <Row gutter={[20 , 15]} className="bottom-border padding">
    <Col xs={24} sm={12} md={11}>
    <label htmlFor="tx1">1. NAME OF PERSON BEING ASSIGNED FAMILY HOUSING</label>
    <Input
    id="tx1"
    type="text"
    placeholder=""
    value={InputValue1}
    onChange={handleinputvalue1}
    >
    </Input>
    </Col>    


    <Col xs={24} sm={12} md={10} className="col">
    <label htmlFor="tx2">2. ADDRESS OF HOUSING TO BE OCCUPIED</label>
    <Input
    id="tx2"
    type="text"
    placeholder=""
    value={InputValue2}
    onChange={handleinputvalue2}
    >
    </Input>
    </Col>    


    <Col xs={24} sm={12} md={3} className="col">
    <label htmlFor="tx3">3. DATE ASSIGNED</label> <br/>
    <DatePicker id="tx3" />
    </Col>    
    </Row>

    <Row gutter={[20 , 15]} className="bottom-border padding ">
    <Col span={24}>
    <label htmlFor="tx4">4. CONDITIONS OF OCCUPANCY</label>
    <Input
    id="tx4"
    type="text"
    placeholder=""
    value={InputValue3}
    onChange={handleinputvalue3}>
    </Input>
    </Col>    
    </Row>


    <Row className="padding">
    <Col span={24}>
    <p>
    A. OCCUPANT USE. The occupant should use the premises solely as a single-family residence for him/herself and any dependents. Use of the unit for any other purpose, including the shelter of any additional number of persons except social guests, is prohibited with out prior written consent of the housing manager.
    <br/>
    B. GOOD REPAIR. Except as otherwise provided herein, the commander should maintain the property in good repair and habitable condition and should be responsible for all repairs not due to the abuse or negligence of the sponsor or his/herself family members during occupancy. Repairs or replacement of furnished equipment due to normal wear and tear should also beat the expense of the Air Force
    <br/>

    C. PETS. If pets are allowed on the premises, the occupant understands that arrangements for having the house flea bombed and deticked as necessary and arrangements for cleaning carpeting (if any) at the termination of occupancy is his/her responsibility. The occupant further understands that any damage caused to the unit or grounds by their pet is also his/her responsibility.
    <br/>

    D. CONDITION OF PROPERTY. The housing management assistant and the occupant have made an inspection of the property, and both parties agree that the property is in a fit and habitable condition, except for those damages or malfunctions that have been itemized in writing on the AF Form 227, Quarters Condition Inspection Report. Copies of this report are retained by housing management and occupant. Any additional items noted by the occupant should be submitted in writing and received by housing management within 15 days of occupancy. If additional items are not received by the housing management office within the 15 day period, housing management will consider the property to be in acceptable condition and suitable for occupancy.
    <br/>

    E. PLUMBING AND APPLIANCES. The occupant should keep the premises, including all plumbing fixtures and appliances, as clean and safe as condition permits and should attempt to unclog and keep clear all waste pipes, drains, and water closets where possible. At the termination of occupancy, all appliances and equipment should be in good working order and the premises should be in a clean condition, normal wear and tear excepted.
    <br/>

    F. USE AND REPAIR OF FACILITIES. The occupant should use, in a reasonable manner, all electrical, plumbing, sanitary, heating, ventilating, air conditioning, and other fixtures, facilities and appliances in or on the premises. Any damages caused by either the sponsor or his/her family members beyond normal wear and tear should be repaired at the expense of the sponsor.
    <br/>

    G. DAMAGING PROPERTY. If the occupant willfully or negligently destroys, defaces, damages, impairs or removes any part of the premises (including fixtures, facilities, and appliances) or willfully or negligently permits any person to do so, the occupant will be held responsible for the damages. Refer to the Housing Brochure.
    <br/>

    H. GENERAL MAINTENANCE. The occupant should, at his/her own expense: (a) keep up and preserve in good condition, any lawns, vines, shrubbery, and gardens, and keep all fences in good repair, normal wear and tear excepted;. (b) remove leaves, sticks, and other debris that accumulate on the property; (c) promptly remove ice and snow, as necessary or required; (d) replace or repair all broken or damaged glass, screens, flooring, wood , plaster, drywall, and locks, occurring during their occupancy, normal wear and tear excepted; (e) keep in a state of good repair and cleanliness, all parts of the property, including equipment and appliances, and keep all property free from objectionable features, nuisances, and hazards. Any repairs or replacement of property, equipment, or appliances required due to the abuse or negligence by acts of commission or omission of the sponsor or his/her family members will be paid for by the sponsor. The approval of the housing manager must be obtained before the occupant places any exceptionally heavy articles, such as water beds, in the unit which may damage the unit's structural integrity.
    <br/>

    I. NOTICE OF DEFECTS OR MALFUNCTION. The occupant should promptly notify the Housing Maintenance Service Call Agency when the structure or the equipment of any fixture contained therein becomes defective, broken, damaged, or malfunctions in anyway.
    <br/>

    J. RESIDENT CONDUCT. The resident should conduct his/herself and require other persons on the premises to conduct themselves in a manner that will not disturb the neighbors.
    <br/>

    K. HEALTH AND SAFETY. The occupant should comply with all health and safety regulations imposed by the commander.
    <br/>

    L. SYSTEM OVERLOADS. The occupant should not install or use any equipment that will overload any gas, water, heating, electrical, sewage, drainage, or air conditioning systems of the assigned premises.
    <br/>

    M. SMOKE DETECTORS. The occupant is responsible for checking smoke detectors periodically during occupancy and keeping them in proper working condition and to report any malfunctions to the Housing Maintenance Service Call Agency.
    <br/>

    N. INSURANCE. Because of potential liability claims for damages, loss to the assignee family housing units, the sponsor may wish to obtain a comprehensive insurance policy which provides protection of his/her personal property and the unit to which he/she is assigned (refer to the Housing Brochure).
    <br/>

    O. REDECORATING AND ALTERATIONS. The occupant must obtain written permission before redecorating and must not make any alterations, additions, or improvements without first obtaining written consent. Such alterations could, at the option of the housing manager, remain with the property or be removed by the occupant. When removing such alterations, the house and premises must be returned to its original condition at the expense of the occupant.
    <br/>

    P. PERIODS OF ABSENCE. The occupant must notify the housing office when extended absences from quarters are anticipated.
    <br/>
    Q. ACCESS TO PROPERTY BY THE HOUSING MANAGER AND HIS/HER DULY DESIGNATED REPRESENTATIVES. When warranted by circumstances or reasonable cause, the installation commander or a duly designated representative may enter the premises to conduct a visual inspection. The occupant must be given advance written notice of the purpose and objective of the inspection.
    <br/>
    R. NEGLECT AND COSTS. If at anytime during the term of this occupancy, the Air Force is required to make repairs to the property or its equipment for damages caused by the abuse or negligence of the sponsor or the sponsor's family members, the sponsor understands that the repairs must be made at his/her expense. As appropriate, the housing occupants should be afforded the option to complete the necessary repairs either by outside contractor or on his/her own initiative.

    </p>
    </Col>
    </Row>

    <Row className="h5">
    <Col span={24}>
    <h5>
    I, THE UNDERSIGNED SPONSOR, HAVE READ AND UNDERSTAND ALL OF THE CONDITIONS CONTAINED HEREIN.
    </h5>
    </Col>
    </Row>


    <Row className="bottom-border">
    <Col span={24}>
    <Table className="ant-table"
    columns={columns}
    dataSource={data}
    responsive breakpoint="md"
    pagination={false}/>
    </Col>
    </Row>

    <Row>
    <Col span={24}>
    <Button className="submit" id="tx5" size="large">Submit</Button>
    </Col>    
    </Row>

    

</div>
)
};

export default Form1;


