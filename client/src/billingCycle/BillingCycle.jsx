import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentHeader from '../common/template/ContentHeader';
import Content from '../common/template/Content';
import Tabs from '../common/tab/Tabs';
import TabsHeader from '../common/tab/TabsHeader';
import TabHeader from '../common/tab/TabHeader';
import TabsContent from '../common/tab/TabsContent';
import TabContent from '../common/tab/TabContent';
import { selectTab, showTabs } from '../common/tab/TabActions';
import { create, update, remove } from './BillingCycleActions';
import List from './BillingCycleList';
import Form from './BillingCycleForm';
import { TAB_LIST, TAB_CREATE, TAB_UPDATE, TAB_DELETE } from '../main/types';

class BillingCycle extends Component {
  componentDidMount() {
    this.props.selectTab(TAB_LIST);
    this.props.showTabs(TAB_LIST, TAB_CREATE);
  }
  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target={TAB_LIST} />
              <TabHeader label="Incluir" icon="plus" target={TAB_CREATE} />
              <TabHeader label="Alterar" icon="pencil" target={TAB_UPDATE} />
              <TabHeader label="Excluir" icon="trash-o" target={TAB_DELETE} />
            </TabsHeader>
            <TabsContent>
              <TabContent id={TAB_LIST}>
                <List />
              </TabContent>
              <TabContent id={TAB_CREATE}>
                <Form onSubmit={this.props.create} />
              </TabContent>
              <TabContent id={TAB_UPDATE}>
                <Form onSubmit={this.props.update} />
              </TabContent>
              <TabContent id={TAB_DELETE}>
                <Form onSubmit={this.props.remove} readOnly/>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectTab, showTabs, create, update, remove }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(BillingCycle);
