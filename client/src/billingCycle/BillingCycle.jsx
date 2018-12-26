import React, { Component } from 'react';

import ContentHeader from '../common/template/ContentHeader';
import Content from '../common/template/Content';
import Tabs from '../common/tab/Tabs';
import TabsHeader from '../common/tab/TabsHeader';
import TabHeader from '../common/tab/TabHeader';
import TabsContent from '../common/tab/TabsContent';

class BillingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsHeader />
          </Tabs>
        </Content>
      </div>
    );
  }
}

export default BillingCycle;
